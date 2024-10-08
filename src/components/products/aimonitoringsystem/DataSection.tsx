"use client";
import React from 'react';
import styles from '../../css/products/aimonitoringsystem/DataSection.module.css';

const DataSection: React.FC = () => {
    return (
        <section className={styles.dataSection}>
            <h1 className={styles.title}>ALL YOUR DATA IN ONE PLACE</h1>
            <p className={styles.description}>
                Break down silos by unifying all your key metrics across every team into <br />
                one, self-serve, platform.
            </p>
        </section>
    );
};

export default DataSection;
