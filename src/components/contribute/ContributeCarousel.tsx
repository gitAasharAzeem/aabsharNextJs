// components/ContributeCarousel.tsx
import React from 'react';
import styles from '../css/contribute/ContributeCarousel.module.css';

const ContributeCarousel: React.FC = () => {
    return (
        <div className={styles.customCarousel}>
            <button className={styles.carouselButtonPrev}>
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
                    <path d="M50.5876 6.3332L56.2084 11.954L30.1626 37.9998L56.2084 64.0457L50.5876 69.6665L18.9209 37.9998L50.5876 6.3332Z" fill="white" />
                </svg>
            </button>
            <div className={styles.carouselTrackContainer}>
                <ul className={styles.carouselTrack}>
                    {/* Dynamic Image Slides */}
                </ul>
            </div>
            <button className={styles.carouselButtonNext}>
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
                    <path d="M25.4124 69.6668L19.7916 64.046L45.8374 38.0002L19.7916 11.9543L25.4124 6.3335L57.0791 38.0002L25.4124 69.6668Z" fill="white" />
                </svg>
            </button>
        </div>
    );
};

export default ContributeCarousel;
