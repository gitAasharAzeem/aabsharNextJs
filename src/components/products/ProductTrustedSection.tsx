import styles from '../css/products/ProductTrustedSection.module.css';

const TrustedSection = () => {
    return (
        <section className={`container-fluid py-3 ${styles.trustedSection}`}>
            <div className="row px-5">
                <h2 className={`my-2 ${styles.trustedTitle}`}>Trusted by:</h2>
            </div>
            <div className="row justify-content-center align-items-center">
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
