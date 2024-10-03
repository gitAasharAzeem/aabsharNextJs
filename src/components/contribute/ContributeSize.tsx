"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './ContributeCarouselAreaNavigation';
import { DotButton, useDotButton } from './ContributeCarouselDots';
import styles from '../css/contribute/ContributeArea.module.css';

const ContributeSize: React.FC = () => {
    const [mosques, setMosques] = useState<any[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    // Fetch mosques data from API and sort by size
    useEffect(() => {
        const fetchMosques = async () => {
            try {
                const response = await axios.get("https://www.admin.aabshar.net/api/v1/public/mosque/top", {
                    params: { sortOption : 'PEOPLE' }  // Query parameter
                });

                const mosquesData = response.data.data;

                // Assuming there is a 'noOfPeople' or 'totalContribution' field for sorting
                const sortedBySize = mosquesData.sort((a: any, b: any) => {
                    // Replace 'noOfPeople' with the correct size field if needed
                    return (b.noOfPeople || 0) - (a.noOfPeople || 0);
                });

                setMosques(sortedBySize);
            } catch (error) {
                console.error("Error fetching mosques:", error);
            }
        };
        fetchMosques();
    }, []);

    return (
        <section className={styles.areaSection}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className={styles.areaHeading}>Size</h2>
                    <a href="/contribute/detailsbysize" className={styles.viewAll}>View All</a>
                </div>
                <div className={styles.embla}>
                    <div className={styles.emblaViewport} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {mosques.map((mosque, index) => (
                                <div className={styles.emblaSlide} key={index}>
                                    {mosque?.image?.featuredImage?.path ? (
                                        <img
                                            src={mosque.image.featuredImage.path}
                                            alt={mosque.name}
                                            className={styles.mosqueImage}
                                        />
                                    ) : (
                                        <img
                                            src="/images/no-image.jpg"
                                            alt={mosque.name}
                                            className={styles.mosqueImage}
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

export default ContributeSize;
