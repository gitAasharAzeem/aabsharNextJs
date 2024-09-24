// components/ContributeMosques.tsx
import React from 'react';
import styles from '../css/contribute/ContributeMosques.module.css';

const ContributeMosques: React.FC = () => {
    return (
        <div className={styles.mosquesSection}>
            <h2 className={styles.mosquesHeading}>Mosques in City</h2>
            <p className={styles.mosquesSubheading}>Explore the groundbreaking projects powered by the WDK AI ToolKit.</p>
            <div className={styles.mosquesCarousel}>
                {/* Carousel of Mosques */}
            </div>
        </div>
    );
};

export default ContributeMosques;
