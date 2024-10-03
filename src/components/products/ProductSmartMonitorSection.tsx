import styles from '../css/products/ProductSmartMonitorSection.module.css';

const ProductSmartMonitorSection = () => {
    return (
        <section className="container-fluid">
            <div className="row">
                <div className={`col-md-7 ${styles.smartMonitorLeft}`}>
                    <h1 className={styles.smartMonitorTitle}>AI Monitoring System</h1>
                    <div className="">
                        <p className={styles.smartMonitorText}>
                            <b>Stop, Shield & Sustainability </b><br />
                            Let AI to detect and stop leaks at the source. It provides real-time alerts when leaks occur and can automatically shut off the water supply. Through intelligent monitoring, it identifies leak sources and waste, mitigating potential damage while reducing water consumption and cutting carbon emissions.
                        </p>
                    </div>
                    <a href="#" className={`btn ${styles.getInfoBtn}`}>Get More Info</a>
                </div>
                <div className="col-md-5">
                    <div className={styles.smartMonitorImage}></div>
                </div>
            </div>
        </section>
    );
};

export default ProductSmartMonitorSection;
