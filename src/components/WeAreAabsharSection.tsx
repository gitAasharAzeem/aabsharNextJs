// WeAreAabsharSection.tsx

import styles from './css/WeAreAabsharSection.module.css';

const WeAreAabsharSection = () => {
    return (
        <section className="container px-10">
            <div className="row">
                {/* Left side with title, description, and button */}
                <div className="col-md-6">
                    <h2 className={styles.title}>We Are Aabshar</h2>
                    <p className={styles.description}>
                        At Aabshar, we understand that water is a precious and finite resource that must be conserved for future generations. That’s why we have made it our mission to provide innovative solutions that help individuals and businesses save water.
                    </p>
                </div>

                {/* Right side with floating product/service boxes */}
                <div className="col-md-6 position-relative">
                    <div className={styles.productBox1}>
                        <a className={styles.productBoxText} href="/">AI Monitoring System →</a>
                    </div>
                    <div className={styles.productBox2}>
                        <a className={styles.productBoxText} href="/">Carbon Credit →</a>
                    </div>
                    <div className={styles.productBox3}>
                        <a className={styles.productBoxText} href="/">Aerator →</a>
                    </div>
                    <div className={styles.productBox4}>
                        <a className={styles.productBoxText} href="/">Water Nozzle →</a>
                    </div>
                    <div className={`d-none d-lg-block ${styles.productBoxCenter}`}>
                        <img src="/images/logo.png" alt="Aabshar Logo" height="40" />
                    </div>
                </div>
                <div className="col-md-6">
                    <button className={styles.exploreBtn}>Explore More!</button>
                </div>
            </div>

            {/* Logos row */}
            <div className="row justify-content-center align-items-center mt-5 ">
                <h3 className={`${styles.appreciatedBy}`}>Appreciated by:</h3>
                <div className="col-6 col-md-2 text-center">
                    <img src="/images/unilever-logo.png" alt="Climate-KIC" className={styles.appreciationLogo} />
                </div>
                <div className="col-6 col-md-2 text-center">
                    <img src="/images/unze-logo.png" alt="The Global Good Fund" className={styles.appreciationLogo} />
                </div>
                <div className="col-6 col-md-2 text-center">
                    <img src="/images/mckinsey-logo.png" alt="McKinsey & Company" className={styles.appreciationLogo} />
                </div>
                <div className="col-6 col-md-2 text-center">
                    <img src="/images/standard-chartered-logo.png" alt="YPO" className={styles.appreciationLogo} />
                </div>
            </div>
        </section>
    );
};

export default WeAreAabsharSection;
