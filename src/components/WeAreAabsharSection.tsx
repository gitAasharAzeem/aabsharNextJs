import styles from './css/WeAreAabsharSection.module.css';

const WeAreAabsharSection = () => {
    return (
        <section className="container p-5">
            <div className="row">
                {/* Left side with title, description, and button */}
                <div className="col-lg-6">
                    <h2 className={styles.title}>One Stop   Solutions</h2>
                    <p className={styles.description}>
                        To improve your water & CO2 footprint, you need to know how and where it’s used. Our AI monitoring solutions collects detailed water flow and usage information to help you achieve ESG & SDGs compliance effectively. The Enterprise Grade system.
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
                <div className="col-lg-6 col-12 position-relative">
                    <div className={styles.productBox1}>
                        <img src="/images/aibox.png" alt="AI Monitoring System" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText}>AI Monitoring System →</a>
                    </div>
                    <div className={styles.productBox2}>
                        <img src="/images/co2Box.png" alt="Carbon Credit" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText}>Carbon Credit →</a>
                    </div>
                    <div className={styles.productBox3}>
                        <img src="/images/path-to-aerator.png" alt="Water Nozzle" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText3}>Accessories →</a>
                    </div>
                    <div className={styles.productBox4}>
                        <img src="/images/path-to-carbon-credit.png" alt="Aerator" className={styles.productImage} />
                        <a href="/" className={styles.productBoxText4}>Water Nozzle →</a>
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
