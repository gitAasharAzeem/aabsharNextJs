import styles from './css/GloballyRecognisedSection.module.css';

export default function GloballyRecognisedSection() {
    return (
        <section className={styles.globallyRecognisedSection}>
            <div className="container">
                <div className="row">
                    <h2 className={styles.sectionTitle}>Globally Recognised:</h2>
                </div>
                <div className="row text-center">
                    <div className="col-md-3 text-center">
                        <div className={`mx-auto mb-3 ${styles.globallyRecognisedImgDiv}`}>
                            <img src="/images/ggf_logo.png" alt="Fast Company" className={`mx-auto mb-3 ${styles.globallyRecognisedImg}`} />
                        </div>
                        <div className={styles.details}>
                            <h3 className={styles.locationTitle}>Fast Company</h3>
                        </div>
                        {/*<img src="/images/uae-flag.png" alt="US Flag" className={`mx-auto ${styles.flagImage}`} />*/}
                    </div>
                    <div className="col-md-3 text-center">
                        <div className={`mx-auto mb-3 ${styles.globallyRecognisedImgDiv}`}>
                            <img src="/images/mckinsey_logo.jpeg" alt="CB Insights" className={`mx-auto mb-3 ${styles.globallyRecognisedImg}`} />
                        </div>
                        <div className={styles.details}>
                            <h3 className={styles.locationTitle}>CB Insights</h3>
                        </div>
                        {/*<img src="/images/us-flag.png" alt="US Flag" className={`mx-auto ${styles.flagImage}`} />*/}
                    </div>

                    <div className="col-md-3 text-center">
                        <div className={`mx-auto mb-3 ${styles.globallyRecognisedImgDiv}`}>
                            <img src="/images/tpl_logo.png" alt="Inc 5000" className={`mx-auto mb-3 ${styles.globallyRecognisedImg}`} />
                        </div>
                        <div className={styles.details}>
                            <h3 className={styles.locationTitle}>Inc 5000</h3>
                        </div>
                        {/*<img src="/images/us-flag.png" alt="US Flag" className={`mx-auto ${styles.flagImage}`} />*/}
                    </div>

                    <div className="col-md-3 text-center">
                        <div className={`mx-auto mb-3 ${styles.globallyRecognisedImgDiv}`}>
                            <img src="/images/nova_logo.png" alt="Construction News" className={`mx-auto ${styles.globallyRecognisedImg}`} />
                        </div>
                        <div className={styles.details}>
                            <h3 className={styles.locationTitle}>Construction News</h3>
                        </div>
                        {/*<img src="/images/us-flag.png" alt="US Flag" className={`mx-auto ${styles.flagImage}`} />*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
