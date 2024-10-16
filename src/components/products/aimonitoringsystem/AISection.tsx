"use client";
import React from 'react';
import styles from '../../css/products/aimonitoringsystem/AISection.module.css';

const AISection: React.FC = () => {
    return (
        <section className={styles.aiSection}>
            <div className={styles.outerContainer}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.logoWrapper}>
                            <img src="/images/logo.png" alt="logo" className={styles.logo} />
                        </div>
                        <h2 className={styles.title}>AI monitoring system</h2>
                        <span className={styles.mncInfo}>200+ MNCs</span>
                    </div>

                    <div className={styles.content}>
                        {/* Row 1 */}
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-body">
                                        <h3 className={`card-title ${styles.cardTitle}`}>Problem</h3>
                                        <p className={`card-text ${styles.cardText}`}>
                                            Water leaks disrupt operations across industries, causing costly delays and damage. Unnoticed leaks escalate over time, and without real-time insights, organizations struggle to optimize usage, resulting in increased costs and significant environmental impact.
                                        </p>
                                        <a href="/contact" className={`card-link ${styles.cardLink}`}>
                                            Connect with us to Identify Problem <span className={styles.arrow}>&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={`col-lg-6 ${styles.secondDiv}`}>
                                {/* Use background image for the card */}
                                <div className={`card ${styles.gridCard} ${styles.backgroundImageCard}`} style={{ backgroundImage: 'url(/images/aiwatersaving.png)' }}>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-body text-center">
                                        <div className="mx-auto">
                                            <div className="row">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src="/images/leaking.png" className={`me-3 ${styles.iconImg}`} />
                                                    <span className={`${styles.textIcon}`}>Water Leakage</span>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src="/images/electric-pole.png" className={`me-3 ${styles.iconImg}`} />
                                                    <span className={`${styles.textIcon}`}>Electric Consumption</span>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src="/images/waste-water.png" className={`me-3 ${styles.iconImg}`} />
                                                    <span className={`${styles.textIcon}`}>Water Wastage</span>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src="/images/co2.png" className={`me-3 ${styles.iconImg}`} />
                                                    <span className={`${styles.textIcon}`}>CO2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className={`card ${styles.gridCard} ${styles.secondDiv}`}>
                                    <div className="card-body">
                                        <h3 className={`card-title ${styles.cardTitle}`}>Identification</h3>
                                        <p className={`card-text ${styles.cardText}`}>
                                            Our system swiftly identifies leaks and inefficiencies in real time, minimizing potential damage. By providing accurate data and alerts, organizations can address issues promptly, reducing costs and preserving resources while enhancing operational efficiency and sustainability
                                        </p>
                                        <a href="/contact" className={`card-link ${styles.cardLink}`}>
                                            Study how standard chartered get this idebtification <span className={styles.arrow}>&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-body">
                                        <h3 className={`card-title ${styles.cardTitle}`}>Decision</h3>
                                        <p className={`card-text ${styles.cardText}`}>
                                            Utilize real-time data to make swift, informed decisions. Identify inefficiencies and address issues proactively to optimize resources, reduce costs, and enhance sustainability in your operations.
                                        </p>
                                        <a href="/contact" className={`card-link ${styles.cardLink}`}>
                                            You can get live demo <span className={styles.arrow}>&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-lg-6 ${styles.secondDiv}`}>
                                <div className={`card ${styles.gridCard} ${styles.backgroundImageCard}`} style={{ backgroundImage: 'url(/images/graph.png)' }}>
                                </div>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <div className={`card ${styles.gridCard} ${styles.backgroundImageCard}`} style={{ backgroundImage: 'url(/images/outcome.png)' }}>
                                </div>
                            </div>
                            <div className={`col-lg-6 ${styles.secondDiv}`}>
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-body">
                                        <h3 className={`card-title ${styles.cardTitle}`}>Outcome</h3>
                                        <p className={`card-text ${styles.cardText}`}>
                                            Save up to 98% on water and 60% on electricity. Let AI manage your water risks while you earn money by reducing carbon emissions. Achieve operational efficiency and sustainability, positively impacting your bottom line and the environment.
                                        </p>
                                        <a href="/contact" className={`card-link ${styles.cardLink}`}>
                                            Analyze the best outcome<span className={styles.arrow}>&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <a href="https://youtu.be/ZX4ianxvTH8?si=CPoK7uXcWIiPshpv" target="_blank" className={`btn ${styles['video-demo-btn']}`}>Video Demo</a>
                        </div>
                        <div className="col-6">
                            <a href="https://app.aabshar.net/login" target="_blank" className={`btn ml-5 ${styles['subscribe-btn']}`}>Subscribe Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;
