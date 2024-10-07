"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './ContributeCarouselMosqueNavigation';
import { DotButton, useDotButton } from './ContributeCarouselDots';
import styles from '../css/contribute/ContributeMosques.module.css';
import LoadingSkeleton from "@/components/LoadingSkeleton"; // Assuming you have this component

const ContributeMosques: React.FC = () => {
    const [mosques, setMosques] = useState<any[]>([]);
    const [loading, setLoading] = useState(true); // Loading state for the data

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
                setLoading(false); // Data is loaded, stop loading spinner
            } catch (error) {
                console.error("Error fetching mosques:", error);
                setLoading(false); // Stop loading even on error
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
                </div>
            </div>
        </div>
    );
};

export default ContributeMosques;
