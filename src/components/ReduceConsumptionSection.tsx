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
                        <h3 className={styles.featureTitle}>Save Electricity</h3>
                        <p>The use of water pumps will be reduced because the quantity of water in a tank will deplete slower.
                        </p>
                </div>
                <div className="col-md-3 col-sm-12 my-3">
                        <h3 className={styles.featureTitle}>Save Water</h3>
                        <p>Our nozzles will reduce the water consumption up to 85% without affecting the waterflow</p>
                </div>
                <div className="col-md-3 col-sm-12 my-3">
                        <h3 className={styles.featureTitle}>Save Money</h3>
                        <p>Reduced water quantity and reduced usage of pumps will positively impact the bills at the end of the month.</p>
                </div>
                <div className="col-md-3 col-sm-12 my-3">
                        <h3 className={styles.featureTitle}>Fight Water Scarcity</h3>
                        <p>The tanks will be able to serve more people with the same amount of water</p>
                </div>
            </div>
        </div>
    );
}

export default ReduceConsumptionSection;
