// components/SmartMonitorSection.tsx
import React from 'react';
import styles from '../../css/products/smartmonitor/SmartMonitorSection.module.css';

const SmartMonitorSection = () => {
    return (
        <section>
            <div className="container-fluid bg-white">
                <div className="row align-items-center bg-white">
                    <div className="col-12 col-md-auto">
                        <img src="/images/smart-monitor-2.png" alt="Smart Monitor" className={styles.smartMonitorImage} />
                    </div>
                    <div className={`col-12 col-md ${styles.smartMonitorContent}`}>
                        <h2 className={styles.smartMonitorTitle}>SMART MONITOR</h2>
                        <p className={styles.smartMonitorSubtitle}>
                            Prevent Water Damage Reduce Consumption Cut Carbon Emissions.
                        </p>
                        <p className={styles.smartMonitorDescription}>
                            WINT water management system detects and stops leaks at the source using Artificial Intelligence.
                            It alerts you when water is leaking and can automatically shut it off. Intelligent real-time
                            monitoring identifies sources of leaks and waste, mitigating damage, reducing consumption,
                            and cutting the resulting carbon emissions.
                        </p>
                        <div className={styles.smartMonitorRating}>
                            <span>Ratings:</span>
                            <span className={styles.stars}>⭐⭐⭐⭐☆</span>
                            <span className={styles.price}>200</span><span className={styles.currency}>PKR</span>
                        </div>
                        <a href="#" className={`btn ${styles.subscribeBtn}`}>Subscribe Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartMonitorSection;
