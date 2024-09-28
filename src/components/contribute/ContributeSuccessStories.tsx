// components/ContributeSuccessStories.tsx
import React from 'react';
import styles from '../css/contribute/ContributeSuccessStories.module.css';

const ContributeSuccessStories: React.FC = () => {
    return (
        <div className={`container ${styles.successStoriesContainer}`}>
            <h2 className={styles.successStoriesHeading}>Success Stories</h2>
        </div>
    );
};

export default ContributeSuccessStories;
