// Import the CSS module
import styles from './css/USPsSection.module.css';

const USPsSection = () => {
    return (
        <section className={styles['usp-section']} >
            <div className={`container ${styles['containerDiv']}`}>
                <div className="row">
                    {/* Text Content */}
                    <div className="col-md-7 align-items-center mt-5">
                        <h2 className={styles['usp-title']}>Prevent Water Damage Reduce Consumption</h2>
                        <p className={styles['usp-description']}>
                            Register your local community centers—mosques,<br /> Imam Bargahs, schools, hospitals, and more—with Aabshar.
                        </p>
                        <div className={`${styles['usp-buttons']} mt-4 d-flex d-flex-inline`}>
                            {/*<a href="#" className={`btn ${styles['video-demo-btn']}`}>Video Demo</a>*/}
                            <a href="https://app.aabshar.net/login" target="_blank" className={`btn ${styles['subscribe-btn']} ms-lg-3`}>Subscribe Now</a>
                        </div>
                    </div>
                    {/* Image/Illustration */}
                    <div className="col-md-5 pe-0 mt-3 align-items-center d-flex justify-content-center">
                        <img
                            src="/images/video-demo-illustration.png"
                            alt="Video Demo Illustration"
                            className={`img-fluid ${styles['usp-image']}`}
                        />
                    </div>
                    <div className="col-12 pt-5">
                        <div className={styles["dot-container"]}>
                            <span className={`${styles["dot"]} ${styles["active"]}`}></span>
                            <span className={styles["dot"]}></span>
                            <span className={styles["dot"]}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default USPsSection;
