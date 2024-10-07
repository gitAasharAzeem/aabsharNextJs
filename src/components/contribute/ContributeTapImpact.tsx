// components/ContributeTapImpact.tsx
import React from 'react';
import styles from '../css/contribute/ContributeTapImpact.module.css';

const ContributeTapImpact: React.FC = () => {
    return (
        <div className={`text-center ${styles.tapImpactSection}`}>
            <h2 className={styles.tapImpactTitle}>Every tap creates 92% Impact</h2>
            <p className={styles.tapImpactSubtitle}>You can donate a tap and sponsor a whole mosque</p>
            <div className={styles.tapImpactButtons}>
                <a href="https://app.aabshar.net/dashboard" target="_blank" className={`btn ${styles.btnDonateTap}`}>Donate a Tap</a>
                {/*<a href="#" className={`btn ${styles.btnContributeMosque}`}>Contribute to Mosque</a>*/}
            </div>
        </div>
    );
};

export default ContributeTapImpact;
