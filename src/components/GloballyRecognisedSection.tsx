import styles from './css/GloballyRecognisedSection.module.css';

export default function GloballyRecognisedSection() {
    return (
        <section className={styles.globallyRecognisedSection}>
            <div className="container">
                <div className="row">
                    <h2 className={styles.sectionTitle}>Globally Recognised:</h2>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 text-center my-3">
                        <img src="/images/uae-flag.png" alt="UAE Flag" className={`mx-auto ${styles.flagImage}`} />
                        <h3 className={styles.locationTitle}>Abu Dhabi</h3>
                        <p className={styles.locationDescription}>
                            XYZ Completion won by Aabshar. Add Accomplishment and Impact you create.
                        </p>
                    </div>

                    <div className="col-md-4 text-center my-3">
                        <img src="/images/us-flag.png" alt="US Flag" className={`mx-auto ${styles.flagImage}`} />
                        <h3 className={styles.locationTitle}>U.S</h3>
                        <p className={styles.locationDescription}>
                            XYZ Completion won by Aabshar. Add Accomplishment and Impact you create.
                        </p>
                    </div>

                    <div className="col-md-4 text-center my-3">
                        <img src="/images/us-flag.png" alt="US Flag" className={`mx-auto ${styles.flagImage}`} />
                        <h3 className={styles.locationTitle}>U.S</h3>
                        <p className={styles.locationDescription}>
                            XYZ Completion won by Aabshar. Add Accomplishment and Impact you create.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
