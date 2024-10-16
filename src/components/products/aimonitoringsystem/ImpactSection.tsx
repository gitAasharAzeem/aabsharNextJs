import styles from '../../css/products/aimonitoringsystem/ImpactSection.module.css';

const ImpactSection = () => {
    return (
        <div className={styles.containerOverlay}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Measure your impact</h2>
                <p className={styles.description}>
                    Connect all your trusted business data with your product data to understand the real impact on your marketing efforts, support, NPS, billing, and more.
                </p>
            </div>
        </div>
    );
};

export default ImpactSection;
