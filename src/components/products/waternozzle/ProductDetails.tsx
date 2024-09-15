// components/ProductDetailsSection.tsx
import React from 'react';
import styles from '../../css/products/waternozzle/ProductDetailsSection.module.css';

// Define the type for product features
type Feature = {
    icon: string;
    text: string;
};

// Define the type for the product
type Product = {
    name: string;
    description1: string;
    description2?: string; // Optional in case there's no second description
    features: Feature[];
    rating: string;
    price: string;
    image1: string;
    image2?: string; // Optional in case there's only one image
};

// Define the props type
type ProductDetailsProps = {
    product: Product;
};

// Update the component with typed props
const ProductDetailsSection: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
        <section className={styles.productDetailsSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className={styles.productImage1}>
                            <img src={product.image1} alt={product.name} />
                        </div>
                        {product.image2 && (
                            <div className={styles.productImage2}>
                                <img src={product.image2} alt={product.name} />
                            </div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <div className={styles.productInfo}>
                            <h2 className={styles.productTitle}>{product.name}</h2>
                            <p className={styles.productDescription}>{product.description1}</p>
                            {product.description2 && (
                                <p className={styles.productDescription}>{product.description2}</p>
                            )}
                            <div className={styles.productFeatures}>
                                <p><strong>Features:</strong></p>
                                {product.features.map((feature, index) => (
                                    <p key={index}>
                                        <img src={`/images/${feature.icon}`} alt="feature-icon" /> {feature.text}
                                    </p>
                                ))}
                            </div>
                            <div className={styles.productRatings}>
                                <p><strong>Ratings:</strong> <span className={styles.stars}>{product.rating}</span></p>
                            </div>
                            <div className={styles.productPrice}>
                                <p>{product.price} PKR</p>
                            </div>
                            <a href="#" className={`btn ${styles.btnBuy}`}>Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsSection;
