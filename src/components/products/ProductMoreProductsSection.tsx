import styles from '../css/products/ProductMoreProductsSection.module.css';

const ProductMoreProductsSection = () => {
    const urlBuyNow = "https://wa.me/923369991100?text=Hello,%20I%27m%20interested%20in%20your%20Product%20";
    const urlSubscribeNow = "https://app.aabshar.net";
    const urlContact = "/contact";
    const products = [
        { image: 'aerator.png', title: 'Aerator', description: 'Fix your broken tap, no need to replace the entire tap; simply replace the aerator for an effective solution.', button: 'Buy Now' , link: urlBuyNow },
        { image: 'aimonitoringsystem.png', title: 'AI Monitoring System', description: 'Our AI Monitoring System provides real-time insights, detects anomalies, and optimizes resource management, ensuring efficient operations and sustainability.', button: 'Subscribe Now', link: '/contact'},
        { image: 'neck.png', title: 'Neck', description: 'Fix your leaky tap, no need to replace the entire tap; simply replace the water tap neck for an effective solution.', button: 'Buy Now', link: urlBuyNow},
        { image: 'singleModeProduct.png', title: '85% Water Saving Optimizer', description: 'Single Mode Nozzle - spray version that hides under the tap and offer huge savings without any compromises in experience and performance.', button: 'Buy Now', link: urlBuyNow},
        { image: 'doubleModeProduct.png', title: '98% Water  Saving Optimizer', description: 'Dual Flow Nozzle - experience the all new mist flow. Easily switch water flow from mist to normal flow. Saves 85% to 98% Water.', button: 'Buy Now', link: urlBuyNow},
        { image: 'optimizerShower.png', title: 'Optimizer Shower', description: 'Have a great shower experience with 75 % less water. There are three main criteria for a satisfying shower experience: Coverage, Pressure and Heat.', button: 'Buy Now', link: urlBuyNow},
        { image: 'smart-monitor.jpg', title: 'Smart Water Meter', description: 'Our Smart Water Meter monitors usage in real-time, detects leaks, and promotes efficient water management for cost savings and sustainability', button: 'Subscribe Now', link: '/contact'},
        { image: 'savingOptimizer.png', title: '90% Water  Saving Optimizer', description: 'Tri Flow Nozzle - offers 3 adjustable flow rates for versatile usage, enhancing water efficiency while reducing waste and conserving resources.', button: 'Buy Now', link: urlBuyNow},
        { image: 'industrialSize.png', title: 'Industrial Size', description: 'The Industrial Size Water Optimizer is designed for large-scale applications, maximizing water efficiency and reducing waste while ensuring optimal performance for industrial operations.', button: 'Contact Us', link: '/contact'},
    ];

    return (
        <div className={styles.moreProductsSection}>
            <div className="container p-2">
                <div className="row mt-2">
                    {products.map((product, index) => (
                        <div key={index} className="col-md-4">
                            <div className={styles.productCard}>
                                <div className={styles.productCardImgTitle}>
                                    <div className={styles.productCardImgOverlay}>
                                        <img src={`/images/${product.image}`} alt={product.title} className={styles.productImage}/>
                                    </div>
                                    <h3 className={styles.productTitle}>{product.title}</h3>
                                    <p className={styles.productDescription}>{product.description}</p>
                                </div>
                                <a
                                    href={product.link === '/contact' ? product.link : `${product.link}${product.title}`}
                                    className={`btn ${styles.productBtn}`}
                                >
                                    {product.button}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductMoreProductsSection;
