import styles from './css/WeAreAabsharSection.module.css';

const WeAreAabsharSection = () => {
    return (
        <section className="container p-5">
            <div className="row">
                {/* Left side with title, description, and button */}
                <div className="col-md-6">
                    <h2 className={styles.title}>We Are Aabshar</h2>
                    <p className={styles.description}>
                        At Aabshar, we understand that water is a precious and finite resource that must be conserved for future generations. That’s why we have made it our mission to provide innovative solutions that help individuals and businesses save water.
                    </p>
                    <a href="/products" target="_blank" className={`btn ${styles.exploreBtn} ms-lg-3`}>Explore More!</a>

                    {/* Logos row */}
                    <div className="row justify-content-center align-items-center my-5">
                        <h3 className={styles.appreciatedBy}>Appreciated by:</h3>
                        <div className="col-6 col-md-2 text-center">
                            <img src="/images/climate_kic.png" alt="Climate-KIC" className={styles.appreciationLogo} />
                        </div>
                        <div className="col-6 col-md-2 text-center">
                            <img src="/images/ggf_logo.png" alt="The Global Good Fund" className={styles.appreciationLogo} />
                        </div>
                        <div className="col-6 col-md-2 text-center">
                            <img src="/images/mckinsey_logo.jpeg" alt="McKinsey & Company" className={styles.appreciationLogo} />
                        </div>
                        <div className="col-6 col-md-2 text-center">
                            <img src="/images/ypo_logo.png" alt="YPO" className={styles.appreciationLogo} />
                        </div>
                    </div>
                </div>

                {/* Right side with floating product/service boxes */}
                <div className="col-md-6 position-relative">
                    <div className={styles.productBox1}>
                        <img src="/images/path-to-ai-monitoring-system.png" alt="AI Monitoring System" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText}>AI Monitoring System →</a>
                    </div>
                    <div className={styles.productBox2}>
                        <img src="/images//path-to-carbon-credit.png" alt="Carbon Credit" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText}>Carbon Credit →</a>
                    </div>
                    <div className={styles.productBox3}>
                        <img src="/images//path-to-aerator.png" alt="Aerator" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText}>Aerator →</a>
                    </div>
                    <div className={styles.productBox4}>
                        <img src="/images//path-to-water-nozzle.png" alt="Water Nozzle" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText}>Water Nozzle →</a>
                    </div>

                    {/* Center Aabshar Logo */}
                    <div className={styles.productBoxCenter}>
                        <img src="/images/logo.png" alt="Aabshar Logo" className={styles.centerLogo} />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WeAreAabsharSection;
