// src/components/ReduceConsumptionSection.tsx

import styles from './css/ReduceConsumptionSection.module.css';

const ReduceConsumptionSection = () => {
    return (
        <div className={styles.reduceConsumptionSection}>
            <div className="row text-center">
                <h2 className={styles.sectionTitle}>REDUCE CONSUMPTION AND CUT WATER BILLS</h2>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12 my-3">
                </div>
                <div className="col-md-3 col-sm-12 my-3">
                        <p className={styles.featureTitle}>Save Water</p>
                        <p className={styles.featureDescription}>Our nozzles will reduce the water consumption up to 85% without affecting the waterflow</p>
                </div>
                <div className="col-md-3 col-sm-12 my-3">
                        <p className={styles.featureTitle}>Save Money</p>
                        <p className={styles.featureDescription}>Reduced water quantity and reduced usage of pumps will positively impact the bills at the end of the month.</p>
                </div>
                <div className="col-md-3 col-sm-12 my-3">
                        <p className={styles.featureTitle}>Fight Water Scarcity</p>
                        <p className={styles.featureDescription}>The tanks will be able to serve more people with the same amount of water</p>
                </div>
            </div>
        </div>
    );
}

export default ReduceConsumptionSection;
