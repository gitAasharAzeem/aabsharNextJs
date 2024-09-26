"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './ContributeCarouselMosqueNavigation';
import { DotButton, useDotButton } from './ContributeCarouselDots';
import styles from "../css/contribute/ContributeContributionAmount.module.css";

interface Mosque {
    id: string;
    name: string;
    area: string;
    city: string;
    totalContribution: number;
    image: { featuredImage: { path: string } };
}

const ContributeMosqueList: React.FC = () => {
    const [mosques, setMosques] = useState<Mosque[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }); // Embla carousel setup
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    useEffect(() => {
        const fetchMosques = async () => {
            try {
                const response = await axios.get("https://www.admin.aabshar.net/api/v1/public/mosque/top");
                const mosqueData: Mosque[] = response.data.data;

                // We only want 3 mosques, so slice the data to only include 3
                setMosques(mosqueData.slice(0, 3));
            } catch (error) {
                console.error("Error fetching mosque data:", error);
            }
        };
        fetchMosques();
    }, []);

    return (
        <div className="container">
            <div className={styles.contributeMosqueList}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className={styles.contributionHeading}>CONTRIBUTION</h2>
                    <a href="/contribute/detailsbycontribution" >View All</a>
                </div>
                {/* Embla Carousel */}
                <div className={styles.embla}>
                    <div className={styles.emblaViewport} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {mosques.map((mosque, index) => (
                                <div key={mosque.id} className={styles.emblaSlide}>
                                    <img src={mosque.image.featuredImage.path} alt={mosque.name} className={styles.mosqueImage} />
                                    <div className={styles.slideText}>
                                        <h3>{mosque.name}</h3>
                                        <p>{mosque.area}, {mosque.city}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*/!* Navigation Controls *!/*/}
                    {/*<div className={styles.emblaControls}>*/}
                    {/*    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />*/}
                    {/*    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />*/}
                    {/*</div>*/}

                    {/*/!* Dots Navigation *!/*/}
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

export default ContributeMosqueList;
