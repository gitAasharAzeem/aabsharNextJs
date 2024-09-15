// components/WaterReductionSection.tsx
import React from 'react';
import styles from '../../css/products/smartmonitor/WaterReductionSection.module.css';

const WaterReductionSection = () => {
    return (
        <section className={styles.waterReductionSection}>
            <div className="container">
                <h2 className={styles.sectionHeading}>REDUCE CONSUMPTION AND CUT WATER BILLS</h2>
            </div>
            <div className={`container ${styles.containerSubheading}`}>
                <div className={`w-75 ${styles.subheadingContainer}`}>
                    <p className={styles.sectionSubheading}>
                        WINT water intelligence monitors all your water use and detects the sources of waste.
                        <br />It provides detailed analytics about your water consumption.
                    </p>
                    <p>WINT saves water – and cuts up to 25% of your water bills.</p>
                </div>
            </div>
        </section>
    );
};

export default WaterReductionSection;
