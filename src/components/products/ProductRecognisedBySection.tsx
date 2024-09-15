import styles from '../css/products/ProductRecognisedBySection.module.css';

const ProductRecognisedBySection = () => {
    return (
        <section className={styles.recognisedBySection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <h2 className={styles.recognisedByTitle}>RECOGNISED BY:</h2>
                    </div>
                    <div className="col-md-7">
                        <div className={styles.recognisedByLogos}>
                            <img src="/images/recongnized1.png" alt="Logo 1" className="me-3"/>
                            <img src="/images/recognized2.png" alt="Logo 2" className="ms-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductRecognisedBySection;
