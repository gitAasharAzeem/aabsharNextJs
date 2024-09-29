"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './ContributeCarouselMosqueNavigation';
import { DotButton, useDotButton } from './ContributeCarouselDots';
import styles from '../css/contribute/ContributeMosques.module.css';

const ContributeMosques: React.FC = () => {
    const [mosques, setMosques] = useState<any[]>([]); // State to hold mosque data
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    // Fetch mosque data from the API and sort them in round-robin by city
    useEffect(() => {
        const fetchMosques = async () => {
            try {
                const response = await axios.get("https://www.admin.aabshar.net/api/v1/public/mosque/top");
                const mosqueData = response.data.data;

                // Group mosques by city
                const cityGroupedMosques: { [city: string]: any[] } = {};
                mosqueData.forEach((mosque: any) => {
                    if (!cityGroupedMosques[mosque.city]) {
                        cityGroupedMosques[mosque.city] = [];
                    }
                    cityGroupedMosques[mosque.city].push(mosque);
                });

                // Round-robin sorting: Pick one mosque from each city, then the second from each, and so on
                const roundRobinSortedMosques: any[] = [];
                let moreMosquesToAdd = true;

                while (moreMosquesToAdd) {
                    moreMosquesToAdd = false;
                    Object.keys(cityGroupedMosques).forEach((city) => {
                        if (cityGroupedMosques[city].length > 0) {
                            roundRobinSortedMosques.push(cityGroupedMosques[city].shift());
                            moreMosquesToAdd = true;
                        }
                    });
                }

                setMosques(roundRobinSortedMosques);
            } catch (error) {
                console.error("Error fetching mosques:", error);
            }
        };
        fetchMosques();
    }, []);

    return (
        <div className={styles.mosquesSection}>
            <div className={styles.mosquesDescription}>
                <h2 className={styles.mosquesHeading}>Mosques in City</h2>
                <p className={styles.mosquesSubheading}>
                    Explore the groundbreaking projects powered by the WDK AI ToolKit, showcasing its remarkable<br/>
                    capabilities and transformative impact across diverse industries.
                </p>
            </div>
            <div className={styles.mosquesCarousel}>
                <div className={styles.embla}>
                    <div className={styles.emblaViewport} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {mosques.map((mosque, index) => (
                                <div className={styles.emblaSlide} key={index}>
                                    <img className={styles.emblaSlideImg} src={mosque.image.featuredImage.path} alt={`Mosque ${mosque.name}`} />
                                    <div className={styles.slideText}>
                                        <h5>{mosque.name}</h5>
                                        <p>{mosque.area}</p>
                                        <p>{mosque.city}</p>
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
                    {/* Dots for Navigation */}
                    {/*<div className={styles.emblaDots}>*/}
                    {/*    {scrollSnaps.map((_, index) => (*/}
                    {/*        <DotButton*/}
                    {/*            key={index}*/}
                    {/*            onClick={() => onDotButtonClick(index)}*/}
                    {/*            className={`${styles.carouselDotButton} ${index === selectedIndex ? styles.emblaDotSelected : ''}`}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default ContributeMosques;
