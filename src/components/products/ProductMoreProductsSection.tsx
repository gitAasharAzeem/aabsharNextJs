import styles from '../css/products/ProductMoreProductsSection.module.css';

const ProductMoreProductsSection = () => {
    const products = [
        { image: 'aerator.png', title: 'Aerator', description: 'Description about Aerator', button: 'Buy Now' },
        { image: 'aimonitoringsystem.png', title: 'AI Monitoring System', description: 'Description about AI Monitoring System', button: 'Subscribe Now' },
        { image: 'neck.png', title: 'Neck', description: 'Description about Neck', button: 'Buy Now' },
        { image: 'waternozel.png', title: 'Water Nozzal', description: 'Description about Water Nozzal', button: 'Buy Now' },
    ];

    return (
        <section className={styles.moreProductsSection}>
            <div className="container">
                <h2 className={styles.productsHeading}>More Products</h2>
                <div className="row mt-2">
                    {products.map((product, index) => (
                        <div key={index} className="col-md-3">
                            <div className={styles.productCard}>
                                <img src={`/images/${product.image}`} alt={product.title} className={styles.productImage}/>
                                <h3 className={styles.productTitle}>{product.title}</h3>
                                <p className={styles.productDescription}>{product.description}</p>
                                <a href="#" className={`btn ${styles.productBtn}`}>{product.button}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductMoreProductsSection;
