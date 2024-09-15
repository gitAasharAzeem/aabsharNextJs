// components/HeroSection.tsx
import React from 'react';
import styles from '../../css/products/waternozzle/HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
                <div className="container">
                    <div className={styles.heroText}>
                        <h1>AVERAGE KARACHI HOME..... START THIS PAGE WITH THE FACT RELATED TO YOUR PRODUCT TARGET MARKET</h1>
                        <p>Use Aabshar Solution to save yourself.... Use catchy line like call to action.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
