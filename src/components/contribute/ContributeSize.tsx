"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import EmblaCarousel, { EmblaOptionsType, EmblaEventType } from "embla-carousel";
import styles from "../css/contribute/ContributeSize.module.css";
import { PrevButton, NextButton, usePrevNextButtons } from "./ContributeCarouselNavigation";
import { DotButton, useDotButton } from "./ContributeCarouselDots";
import axios from "axios";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

interface CarouselProps {
    options?: EmblaOptionsType; // Optional Embla carousel options
}

const ContributeSize: React.FC<CarouselProps> = ({ options }) => {
    const emblaRef = useRef<HTMLDivElement>(null);
    const [emblaApi, setEmblaApi] = useState<ReturnType<typeof EmblaCarousel> | undefined>(undefined);
    const tweenFactor = useRef(0);

    const [slides, setSlides] = useState<string[]>([]); // State to hold the slides (image URLs)

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
            const isScrollEvent = eventName === "scroll";

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

                    // Calculate opacity based on distance to target
                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
                    const opacity = "1"; // Adjust range from 0.4 to 1
                    embla.slideNodes()[slideIndex].style.opacity = opacity;
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
                const mosqueSlides = mosqueData.map((mosque: any) => mosque.image.featuredImage.path);
                setSlides(mosqueSlides);
            } catch (error) {
                console.error("Error fetching mosque data:", error);
            }
        };

        fetchMosques();
    }, []);

    useEffect(() => {
        if (emblaRef.current && !emblaApi) {
            const embla = EmblaCarousel(emblaRef.current, options || {});
            setEmblaApi(embla);

            embla.on("reInit", () => {
                setTweenFactor(embla);
                tweenOpacity(embla);
            });
            embla.on("scroll", () => tweenOpacity(embla));
            embla.on("slideFocus", () => tweenOpacity(embla));

            setTweenFactor(embla);
            tweenOpacity(embla);
        }

        return () => emblaApi?.destroy();
    }, [emblaApi, options, setTweenFactor, tweenOpacity]);

    return (
        <div className={styles.sizeSection}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className={styles.sizeHeading}>Size</h2>
                    <a href="/contribute/detailsbysize" className={styles.viewAll}>View All</a>
                </div>
                <div className="row">
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
                            {/* Navigation buttons */}
                            <div className={styles.emblaControls}>
                                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                            </div>

                            {/* Dots */}
                            {/* <div className={styles.emblaDots}>
                                {scrollSnaps.map((_, index) => (
                                    <DotButton
                                        key={index}
                                        onClick={() => onDotButtonClick(index)}
                                        className={`${styles.carouselDotButton} ${index === selectedIndex ? styles.emblaDotSelected : ""}`}
                                    />
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributeSize;
