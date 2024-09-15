import React from 'react';
import styles from './css/ImpactCalculatorSection.module.css';

const ImpactCalculatorSection = () => {
    return (
        <section className={`container-fluid py-5 ${styles.impactSection}`}>
            <div className="row">
                {/* Impact Section */}
                <div className="col-lg-7">
                    <h2 className={styles.impactTitle}>Impact:</h2>
                    <div className="row mt-5">
                        <div className="col-6 col-sm-6 mb-5 text-center">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>4.3 Billion</h3>
                                <p className={styles.metricDescription}>Liters Water Saved</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 mb-5 text-center">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>236 Million</h3>
                                <p className={styles.metricDescription}>Lives Impacted</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 mb-5 text-center">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>1 Billion</h3>
                                <p className={styles.metricDescription}>Liters Water Saved</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 mb-5 text-center">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>90 Million</h3>
                                <p className={styles.metricDescription}>tons CO2 Reduced</p>
                            </div>
                        </div>
                    </div>
                    <button className={`btn btn-outline-primary ${styles.downloadButton}`}>
                        Download Brochure
                    </button>
                </div>

                {/* Monthly Impact Calculator */}
                <div className="col-lg-5">
                    <h2 className={styles.impactCalculatorTitle}>Monthly Impact Calculator:</h2>
                    <div className={`mt-5 ${styles.impactCalculatorWrapper}`}>
                        <div className={styles.greenBackground}></div>
                        <div className={styles.calculatorForm}>
                            <form className={styles.form}>
                                <input className={styles.input} type="text" placeholder="Select Product" />
                                <input className={styles.input} type="text" placeholder="Location" />
                                <input className={styles.input} type="text" placeholder="Enter Number of Taps" />
                                <div className={`d-flex justify-content-center text-center ${styles.waterSaving}`}>
                                    <p className="text-center mt-4">Your Estimated Water Saving:</p>
                                    <button className={`text-center ${styles.litersButton}`}>Liters every month</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactCalculatorSection;
