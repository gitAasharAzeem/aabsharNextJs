// components/WaterSustainabilitySection.tsx
import React from 'react';
import styles from '../../css/products/smartmonitor/WaterSustainabilitySection.module.css';

const WaterSustainabilitySection = () => {
    return (
        <section className={styles.waterSustainabilitySection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>WATER SUSTAINABILITY SOLUTION</h2>
                <div className="row my-5">
                    <div className="col-md-4">
                        <div className={styles.sustainabilityCard}>
                            <img src="/images/watersaving.png" alt="Water Saving" className={styles.cardImage} />
                            <h3 className={styles.cardTitle}>Water Saving</h3>
                            <p className={styles.cardDescription}>
                                Implement a sustainability solution that pays for itself through water savings.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.sustainabilityCard}>
                            <img src="/images/easyidentify.png" alt="Easy Identify" className={styles.cardImage} />
                            <h3 className={styles.cardTitle}>Easy Identify</h3>
                            <p className={styles.cardDescription}>
                                Water risk management: Easily identify and eliminate sources of waste.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.sustainabilityCard}>
                            <img src="/images/corbon.png" alt="Reduce Carbon Emissions" className={styles.cardImage} />
                            <h3 className={styles.cardTitle}>Reduce Carbon Emissions</h3>
                            <p className={styles.cardDescription}>
                                Reduce water waste & carbon emissions with detailed analytics.
                            </p>
                        </div>
                    </div>
                </div>
                {/*<div className="text-center">*/}
                {/*    <a href="#" className={`btn ${styles.downloadBtn}`}>Download Product Brochure</a>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default WaterSustainabilitySection;
