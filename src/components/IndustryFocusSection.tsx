// src/components/IndustryFocusSection.tsx

import styles from './css/IndustryFocusSection.module.css';

const IndustryFocusSection = () => {
    return (
        <section className={styles.container}>
            <div className="row">
                {/* Left section: Industry Focus images */}
                <div className="col-md-8 col-sm-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 my-auto">
                            <div>
                                <h2 className={styles.industryFocusTitle}>Industry Focus:</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.imageCard}>
                                <img src="/images/religious-center.png" alt="Religious Centers" />
                                <div className={styles.imageText}>Religious Centers</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${styles.imageCardTextile}`}>
                                <img src="/images/textile.png" alt="Textile" />
                                <div className={styles.imageText}>Textile</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-6">
                            <div className={styles.imageCard}>
                                <img src="/images/hospital.png" alt="Hospital" />
                                <div className={styles.imageText}>Hospital</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={styles.imageCard}>
                                <img src="/images/hospitality.png" alt="Hospitality" />
                                <div className={styles.imageText}>Hospitality</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className={styles.imageCard}>
                                <img src="/images/domestic.png" alt="Domestic" />
                                <div className={styles.imageText}>Domestic</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-auto">
                            <button className={styles.registerButton}>Register your category</button>
                        </div>
                    </div>
                </div>

                {/* Right section: Save Electricity */}
                <div className="col-md-4 col-sm-12">
                        <p className={styles.saveElectricityTitle}>Save Electricity</p>
                        <p className={styles.saveElectricityText}>
                            The use of water pumps will be reduced because the quantity of water in a tank will deplete slower.
                        </p>
                </div>
            </div>
        </section>
    );
};

export default IndustryFocusSection;
