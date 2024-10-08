"use client";
import React from 'react';
import styles from '../../css/products/aimonitoringsystem/AISection.module.css'; // Assuming you are using a CSS module

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
                                        <h3 className="card-title">Problem</h3>
                                        <p className="card-text">
                                            Water leaks disrupt operations across industries, causing costly delays and damage.
                                            Unnoticed leaks escalate over time, and without real-time insights, organizations
                                            struggle to optimize usage, resulting in increased costs and significant environmental
                                            impact.
                                        </p>
                                        <a href="/contact" className="card-link">
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


                        {/*<div className={styles.problem}>*/}
                        {/*    <h3 className={styles.problemTitle}>Problem</h3>*/}

                        {/*</div>*/}

                        {/*<div className={styles.problemImageWrapper}>*/}
                        {/*    <img src="/path-to-image.png" alt="Water leak" className={styles.problemImage} />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;
