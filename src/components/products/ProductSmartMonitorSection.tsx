import styles from '../css/products/ProductSmartMonitorSection.module.css';

const ProductSmartMonitorSection = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-7 mt-5 ps-5">
                    <h1 className={styles.smartMonitorTitle}>SMART MONITOR</h1>
                    <div className="w-75">
                        <p className={styles.smartMonitorText}>
                            Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.
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
