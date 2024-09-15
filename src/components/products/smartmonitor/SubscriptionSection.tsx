// components/SubscriptionSection.tsx
import React from 'react';
import styles from '../../css/products/smartmonitor/SubscriptionSection.module.css';

const SubscriptionSection = () => {
    return (
        <section className={styles.subscriptionSection}>
            <div className="container">
                <div className={styles.ctaButtonContainer}>
                    <a href="#" className={`btn ${styles.ctaButton}`}>Get Subscription Now</a>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionSection;
