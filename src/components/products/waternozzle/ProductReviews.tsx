// components/ReviewsSection.tsx
import React from 'react';
import styles from '../../css/products/waternozzle/ProductReviewsSection.module.css';

// Define the type for a single review
type Review = {
    image: string;
    text: string;
    name: string;
};

// Define the props type
type ReviewsSectionProps = {
    reviews: Review[];
};

// Update the component with typed props
const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
    return (
        <section className={styles.reviewsSection}>
            <div className="container">
                <div className={styles.reviewsHeader}>
                    <h2 className={styles.reviewsTitle}>Reviews:</h2>
                    <span className={styles.reviewsSubtitle}>Trusted by 200+ Users</span>
                </div>
                <div className="row">
                    {reviews.map((review, index) => (
                        <div className="col-md-3" key={index}>
                            <div className={styles.reviewCard}>
                                <div className={styles.reviewUserImg}>
                                    <img src={review.image} alt={review.name} />
                                </div>
                                <p className={styles.reviewText}>{review.text}</p>
                                <p className={styles.reviewUserName}>{review.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
