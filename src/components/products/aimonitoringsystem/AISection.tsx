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
                        <div className="row">
                            <div className="col-md-6">
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
                            <div className="col-md-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className={`card-img`}>
                                        <img className={`${styles.cardImg}`} src="/images/aiwatersaving.png" alt="Card image cap" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Identification */}
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-body">
                                        <p className={`card-text ${styles.cardText}`}></p>
                                        <a href="/contact" className={`card-link ${styles.cardLink}`}></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-body">
                                        <h3 className={`card-title ${styles.cardTitle}`}>Identification</h3>
                                        <p className={`card-text ${styles.cardText}`}>
                                            Our system swiftly identifies leaks and inefficiencies in real time, minimizing potential damage. By providing accurate data and alerts, organizations can address issues promptly, reducing costs and preserving resources while enhancing operational efficiency and sustainability.
                                        </p>
                                        <a href="/contact" className={`card-link ${styles.cardLink}`}>
                                            Study how standard chartered get this idebtification <span className={styles.arrow}>&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Decision */}
                        <div className="row mt-4">
                            <div className="col-md-6">
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
                            <div className="col-md-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-img">
                                        <img className={`${styles.cardImg}`} src="/images/graph.png" alt="Decision Image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Outcome */}
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-img">
                                        <img className={`${styles.cardImg}`} src="/images/outcome.png" alt="Outcome Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`card ${styles.gridCard}`}>
                                    <div className="card-body">
                                        <h3 className={`card-title ${styles.cardTitle}`}>Outcome</h3>
                                        <p className={`card-text ${styles.cardText}`}>
                                            Save up to 98% on water and 60% on electricity. Let AI manage your water risks while you earn money by reducing carbon emissions. Achieve operational efficiency and sustainability, positively impacting your bottom line and the environment.
                                        </p>
                                        <a href="/contact" className={`card-link ${styles.cardLink}`}>
                                            Analysis the best outcome<span className={styles.arrow}>&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;
