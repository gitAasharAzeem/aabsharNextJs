// components/ContributeSize.tsx
import React from 'react';
import styles from '../css/contribute/ContributeSize.module.css';

const ContributeSize: React.FC = () => {
    return (
        <section className={styles.sizeSection}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className={styles.sizeHeading}>Size</h2>
                    <a href="/contribute/detailsbysize" className={styles.viewAll}>View All</a>
                </div>
                <div className="row">
                    {/* Cards for Sizes */}
                </div>
            </div>
        </section>
    );
};

export default ContributeSize;
