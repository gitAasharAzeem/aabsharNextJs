import React from 'react';
import styles from '../css/contact/WeAreAabshar.module.css';

const WeAreAabshar: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className={styles.title}>WE ARE AABSHAR</h1>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="/images/logo.png"
                            alt="Aabshar Logo"
                            className={styles.logo}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeAreAabshar;
