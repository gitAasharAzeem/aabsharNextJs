import styles from '../css/products/ProductMoreProductsSection.module.css';

const ProductMoreProductsSection = () => {
    const products = [
        { image: 'aerator.png', title: 'Aerator', description: 'Fix your broken tap, no need to replace the entire tap; simply replace the aerator for an effective solution.', button: 'Buy Now' },
        { image: 'aimonitoringsystem.png', title: 'AI Monitoring System', description: 'Our AI Monitoring System provides real-time insights, detects anomalies, and optimizes resource management, ensuring efficient operations and sustainability.', button: 'Subscribe Now' },
        { image: 'neck.png', title: 'Neck', description: 'Fix your leaky tap, no need to replace the entire tap; simply replace the water tap neck for an effective solution.', button: 'Buy Now' },
        { image: 'singleModeProduct.png', title: '85% Water Saving Optimizer', description: 'Single Mode Nozzle - spray version that hides under the tap and offer huge savings without any compromises in experience and performance.', button: 'Buy Now' },
        { image: 'doubleModeProduct.png', title: '98% Water  Saving Optimizer', description: 'Dual Flow Nozzle - experience the all new mist flow. Easily switch water flow from mist to normal flow. Saves 85% to 98% Water.', button: 'Buy Now' },
        { image: 'optimizerShower.png', title: 'Optimizer Shower', description: 'Have a great shower experience with 75 % less water. There are three main criteria for a satisfying shower experience: Coverage, Pressure and Heat.', button: 'Buy Now' },
        { image: 'smart-monitor.jpg', title: 'Smart Water Meter', description: 'Our Smart Water Meter monitors usage in real-time, detects leaks, and promotes efficient water management for cost savings and sustainability', button: 'Buy Now' },
        { image: 'savingOptimizer.png', title: '90% Water  Saving Optimizer', description: 'Tri Flow Nozzle - offers 3 adjustable flow rates for versatile usage, enhancing water efficiency while reducing waste and conserving resources.', button: 'Buy Now' },
        { image: 'industrialSize.png', title: 'Industrial Size', description: 'The Industrial Size Water Optimizer is designed for large-scale applications, maximizing water efficiency and reducing waste while ensuring optimal performance for industrial operations.', button: 'Contact Us' },
    ];

    return (
        <section className={styles.moreProductsSection}>
            <div className="container p-5">
                <h2 className={styles.productsHeading}>More Products</h2>
                <div className="row mt-2">
                    {products.map((product, index) => (
                        <div key={index} className="col-md-3">
                            <div className={styles.productCard}>
                                <div className={styles.productCardImgTitle}>
                                    <img src={`/images/${product.image}`} alt={product.title} className={styles.productImage}/>
                                    <h3 className={styles.productTitle}>{product.title}</h3>
                                    <p className={styles.productDescription}>{product.description}</p>
                                </div>
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
