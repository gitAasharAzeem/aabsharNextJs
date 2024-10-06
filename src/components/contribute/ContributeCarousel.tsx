"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import EmblaCarousel, { EmblaOptionsType, EmblaEventType } from "embla-carousel";
import styles from "../css/contribute/ContributeCarousel.module.css";
import { PrevButton, NextButton, usePrevNextButtons } from "./ContributeCarouselNavigation";
import { DotButton, useDotButton } from "./ContributeCarouselDots";
import axios from "axios";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// Loading spinner or skeleton component


const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

interface CarouselProps {
    options?: EmblaOptionsType; // Optional Embla carousel options
}

const ContributeCarousel: React.FC<CarouselProps> = ({ options }) => {
    const emblaRef = useRef<HTMLDivElement>(null);
    const [emblaApi, setEmblaApi] = useState<ReturnType<typeof EmblaCarousel> | undefined>(undefined);
    const tweenFactor = useRef(0);

    const [slides, setSlides] = useState<string[]>([]); // State to hold the slides (image URLs)
    const [loading, setLoading] = useState(true); // Manage loading state

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const setTweenFactor = useCallback((embla: ReturnType<typeof EmblaCarousel>) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * embla.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback(
        (embla: ReturnType<typeof EmblaCarousel>, eventName?: EmblaEventType) => {
            const engine = embla.internalEngine();
            const scrollProgress = embla.scrollProgress();
            const slidesInView = embla.slidesInView();
            const isScrollEvent = eventName === 'scroll';

            embla.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    // Calculate opacity and scale based on distance to target
                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
                    const opacity = numberWithinRange(tweenValue, 1, 1); // Adjust opacity from 0.4 to 1
                    const scale = numberWithinRange(tweenValue, 0.50, 1); // Adjust scale from 0.95 to 1

                    embla.slideNodes()[slideIndex].style.transform = `scale(${scale})`;
                    embla.slideNodes()[slideIndex].style.opacity = opacity.toString();
                });
            });
        },
        []
    );

    // Fetch mosque data and populate slides
    useEffect(() => {
        const fetchMosques = async () => {
            try {
                const response = await axios.get("https://www.admin.aabshar.net/api/v1/public/mosque/top");
                const mosqueData = response.data.data;

                // Map mosque images into the slides array
                const mosqueSlides = mosqueData.map((mosque: any) => mosque?.image?.featuredImage?.path);
                setSlides(mosqueSlides);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching mosque data:", error);
                setLoading(false); // Handle error state
            }
        };

        fetchMosques();
    }, []);

    // Initialize Embla when the component mounts and only after loading is complete
    useEffect(() => {
        if (emblaRef.current && !emblaApi && !loading) {
            const embla = EmblaCarousel(emblaRef.current, {
                loop: true,
                align: 'center',
                startIndex: 1,
                slidesToScroll: 1,
                skipSnaps: false,
                containScroll: 'trimSnaps',
                ...options,
            });
            setEmblaApi(embla);

            embla.on("reInit", () => {
                setTweenFactor(embla);
                tweenOpacity(embla);
            });
            embla.on("scroll", () => tweenOpacity(embla));
            embla.on("slideFocus", () => tweenOpacity(embla));
            // if (emblaApi && !nextBtnDisabled) {
            //     onNextButtonClick();
            // }
            setTweenFactor(embla);
            tweenOpacity(embla);

        }

        return () => emblaApi?.destroy();
    }, [emblaApi, options, loading, setTweenFactor, tweenOpacity]);

    // Automatically click the "Next" button every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (emblaApi && !nextBtnDisabled) {
                onNextButtonClick();
            }
        }, 2000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [emblaApi, nextBtnDisabled, onNextButtonClick]);

    if (loading) {
        return <LoadingSkeleton />; // Show loading spinner while data is being fetched
    }

    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {slides.map((src, index) => (
                        <div className={styles.emblaSlide} key={index}>
                            <img className={styles.emblaSlideImg} src={src} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div>
                <div className={styles.emblaControls}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    );
};

export default ContributeCarousel;
