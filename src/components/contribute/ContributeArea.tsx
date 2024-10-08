"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './ContributeCarouselAreaNavigation';
import { DotButton, useDotButton } from './ContributeCarouselDots';
import styles from '../css/contribute/ContributeArea.module.css';
import LoadingSkeleton from "@/components/LoadingSkeleton"; // Assuming you have this component

const ContributeArea: React.FC = () => {
    const [mosques, setMosques] = useState<any[]>([]);
    const [loading, setLoading] = useState(true); // Loading state

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    // Fetch mosques data from API
    useEffect(() => {
        const fetchMosques = async () => {
            try {
                const response = await axios.get("https://www.admin.aabshar.net/api/v1/public/mosque/top");
                setMosques(response.data.data);
                setLoading(false); // Data is fetched, stop loading
            } catch (error) {
                console.error("Error fetching mosques:", error);
                setLoading(false); // Stop loading on error
            }
        };
        fetchMosques();
    }, []);

    // Automatically click the "Next" button every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (emblaApi && !nextBtnDisabled) {
                onNextButtonClick();
            }
        }, 2500); // Change slide every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [emblaApi, nextBtnDisabled, onNextButtonClick]);

    if (loading) {
        return <LoadingSkeleton />; // Show loading spinner while data is being fetched
    }

    return (
        <section className={styles.areaSection}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className={styles.areaHeading}>Area</h2>
                    <a href="/contribute/detailsbyarea" className={styles.viewAll}>View All</a>
                </div>
                <div className={styles.embla}>
                    <div className={styles.emblaViewport} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {mosques.map((mosque, index) => (
                                <div className={styles.emblaSlide} key={index}
                                     onClick={() => window.open(`https://app.aabshar.net/mosques/${mosque.id}`, '_blank')}
                                     style={{ cursor: 'pointer' }}
                                >
                                    {mosque?.image?.featuredImage?.path ? (
                                        <img
                                            src={mosque.image.featuredImage.path}
                                            alt={mosque.name}
                                            className={styles.emblaSlideImg}
                                        />
                                    ) : (
                                        <img
                                            src="/images/no-image.jpg"
                                            alt={mosque.name}
                                            className={styles.emblaSlideImg}
                                        />
                                    )}
                                    <div className={styles.slideText}>
                                        <h3>{mosque.name}</h3>
                                        <p>{mosque.area}, {mosque.city}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className={styles.emblaControls}>
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>

                    {/* Dots Navigation */}
                    <div className={styles.emblaDots}>
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`${styles.carouselDotButton} ${index === selectedIndex ? styles.emblaDotSelected : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContributeArea;
