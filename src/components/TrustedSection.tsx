// File: src/components/TrustedSection.tsx
import styles from './css/TrustedSection.module.css';

const TrustedSection = () => {
    return (
        <section className={`container-fluid my-5 ${styles.trustedSection}`}>
            <div className="row d-flex justify-content-center">
                <h2 className={`text-center mt-5 ${styles.trustedTitle}`}>Trusted by:</h2>
            </div>
            <div className="row pb-5 justify-content-center align-items-center">
                <div className={`col-4 col-md d-flex justify-content-center ${styles.logoContainer}`}>
                    <img src="/images/mckinsey-logo.png" alt="McKinsey & Company" className={styles.logo} />
                </div>
                <div className={`col-4 col-md d-flex justify-content-center ${styles.logoContainer}`}>
                    <img src="/images/unilever-logo.png" alt="Unilever" className={styles.logo} />
                </div>
                <div className={`col-4 col-md d-flex justify-content-center ${styles.logoContainer}`}>
                    <img src="/images/unze-logo.png" alt="Unze London" className={styles.logo} />
                </div>
                <div className={`col-4 col-md d-flex justify-content-center ${styles.logoContainer}`}>
                    <img src="/images/standard-chartered-logo.png" alt="Standard Chartered" className={styles.logo} />
                </div>
                <div className={`col-4 col-md d-flex justify-content-center ${styles.logoContainer}`}>
                    <img src="/images/pso-logo.png" alt="PSO" className={styles.logo} />
                </div>
                <div className={`col-4 col-md d-flex justify-content-center ${styles.logoContainer}`}>
                    <img src="/images/us-apparels-logo.png" alt="US Apparels" className={styles.logo} />
                </div>
                <div className={`col-4 col-md d-flex justify-content-center ${styles.logoContainer}`}>
                    <img src="/images/shan-logo.png" alt="Shan Foods" className={styles.logo} />
                </div>
            </div>
        </section>
    );
};

export default TrustedSection;
