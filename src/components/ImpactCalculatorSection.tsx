import React from 'react';
import styles from './css/ImpactCalculatorSection.module.css';

const ImpactCalculatorSection = () => {
    return (
        <section className={`container-fluid ${styles.impactSection}`}>
            <div className="row">
                {/* Impact Section */}
                <div className="col-lg-7">
                    <h2 className={styles.impactTitle}>Impact:</h2>
                    <div className="row mt-5">
                        <div className="col-6 col-sm-6 mb-5">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>4.3 Billion</h3>
                                <p className={styles.metricDescription}>Liters Water Saved</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 mb-5">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>236 Million</h3>
                                <p className={styles.metricDescription}>Lives Impacted</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 mb-5">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>1 Billion</h3>
                                <p className={styles.metricDescription}>Trees Saved</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 mb-5">
                            <div className={styles.metric}>
                                <h3 className={styles.metricTitle}>90 Million</h3>
                                <p className={styles.metricDescription}>Tons CO2 Reduced</p>
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
                                <select className={`form-select ${styles.formSelect}`}>
                                    <option selected="selected" disabled="true">Select Product</option>
                                    <option value="1">Single Mode 85% Saving</option>
                                    <option value="2">Dual Mode 98% Saving</option>
                                </select>
                                <select className={`form-select ${styles.formSelect}`}>
                                    <option selected="selected" disabled="true">Select Location</option>
                                    <option value="1">Mosque</option>
                                    <option value="2">Home</option>
                                    <option value="2">Business</option>
                                </select>
                                <input className={styles.formSelect} type="number" placeholder="Enter Number of Taps" />
                                <div className={`d-flex justify-content-center text-center ${styles.waterSaving}`}>
                                    <p className="text-center mt-4">Your Estimated Water Saving:</p>
                                    <div className={`text-center ${styles.litersButton}`}></div>
                                    <p className="text-center mt-4">Liters every month</p>
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
