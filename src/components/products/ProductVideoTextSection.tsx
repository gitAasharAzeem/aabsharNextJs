import styles from '../css/products/ProductVideoTextSection.module.css';

const ProductVideoTextSection = () => {
    return (
        <section className={styles.videoTextSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className={styles.videoWrapper}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/your-video-id" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className={styles.sectionTitle}>How One solution saves millions lives</h2>
                        <p className={styles.sectionDescription}>
                            At Aabshar, we understand that water is a precious and finite resource that must be conserved for future generations.
                        </p>
                        <a href="#" className={styles.ctaLink}>Let’s Connect to make bigger impact together →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductVideoTextSection;
