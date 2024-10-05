"use client"
import React, { useState, useEffect } from 'react';
import styles from './css/ImpactCalculatorSection.module.css';

const ImpactCalculatorSection = () => {
    const [productType, setProductType] = useState('');
    const [waterConsumptionArea, setWaterConsumptionArea] = useState('');
    const [numberOfTaps, setNumberOfTaps] = useState(0);
    const [waterImpact, setWaterImpact] = useState(0);
    const [electricitySaving, setElectricitySaving] = useState(0);

    const calculateImpact = () => {
        let waterSaving = 0;
        let literPerMin = 0;
        let tapRunningTime = 0;
        let days = 0;
        let electricitySavingFactor = 0;

        // Set water saving percentage based on product type
        if (productType === 'single_mode') {
            waterSaving = 0.85;
        } else if (productType === 'dual_mode') {
            waterSaving = 0.98;
        }

        // Set values based on water consumption area
        if (waterConsumptionArea === 'home') {
            literPerMin = 12;
            tapRunningTime = 5;
            days = 30;
            electricitySavingFactor = 0.05;
        } else if (waterConsumptionArea === 'business') {
            literPerMin = 14;
            tapRunningTime = 10;
            days = 20;
            electricitySavingFactor = 0.3;
        } else if (waterConsumptionArea === 'mosque') {
            literPerMin = 15;
            tapRunningTime = 60;
            days = 30;
            electricitySavingFactor = 0.1;
        }

        // Calculate before consumption, after saving, water impact, and electricity saving
        const beforeConsumption = numberOfTaps * literPerMin * tapRunningTime * days;
        const afterSaving = (literPerMin - (waterSaving * literPerMin)) * numberOfTaps * tapRunningTime * days;
        const waterImpactCalc = beforeConsumption - afterSaving;
        const electricitySavingCalc = waterImpactCalc * electricitySavingFactor;

        setWaterImpact(waterImpactCalc);
        setElectricitySaving(electricitySavingCalc);
    };

    // Trigger calculation whenever any of the input values change
    useEffect(() => {
        if (productType && waterConsumptionArea && numberOfTaps > 0) {
            calculateImpact();
        }
    }, [productType, waterConsumptionArea, numberOfTaps]);

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
                    {/*<button className={`btn btn-outline-primary ${styles.downloadButton}`}>*/}
                    {/*    Download Brochure*/}
                    {/*</button>*/}
                </div>

                {/* Monthly Impact Calculator */}
                <div className="col-lg-5">
                    <h2 className={styles.impactCalculatorTitle}>Monthly Impact Calculator:</h2>
                    <div className={`mt-5 ${styles.impactCalculatorWrapper}`}>
                        <div className={styles.greenBackground}></div>
                        <div className={styles.calculatorForm}>
                            <form className={styles.form}>
                                <select
                                    className={`form-select ${styles.formSelect}`}
                                    value={productType}
                                    onChange={(e) => setProductType(e.target.value)}
                                >
                                    <option value="" disabled>Select Product</option>
                                    <option value="single_mode">Single Mode 85% Saving</option>
                                    <option value="dual_mode">Dual Mode 98% Saving</option>
                                </select>
                                <select
                                    className={`form-select ${styles.formSelect}`}
                                    value={waterConsumptionArea}
                                    onChange={(e) => setWaterConsumptionArea(e.target.value)}
                                >
                                    <option value="" disabled>Select Location</option>
                                    <option value="home">Home</option>
                                    <option value="business">Business</option>
                                    <option value="mosque">Mosque</option>
                                </select>
                                <input
                                    className={styles.formInput}
                                    type="number"
                                    placeholder="Enter Number of Taps"
                                    value={numberOfTaps}
                                    onChange={(e) => setNumberOfTaps(parseInt(e.target.value))}
                                />
                                <div className={`d-flex justify-content-center text-center ${styles.waterSaving}`}>
                                    <p className="text-center mt-4">Your Estimated Water Saving:</p>
                                    <div className={`text-center ${styles.litersButton}`}>
                                        {waterImpact.toLocaleString()}
                                    </div>
                                    <p className="text-center mt-4">Liters every month</p>
                                </div>
                                {/*<p className="text-center mt-4">*/}
                                {/*    Estimated Electricity Saving: {electricitySaving.toFixed(2)} kWh*/}
                                {/*</p>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactCalculatorSection;
