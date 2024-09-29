import styles from '../css/products/ProductProblemSolutionCard.module.css';

// Define a type for the props
type ProductProblemSolutionCardProps = {
    icon: string;
    title: string;
    description: string;
};

// Type the props in the functional component
const ProductProblemSolutionCard: React.FC<ProductProblemSolutionCardProps> = ({ icon, title, description }) => {
    return (
        <div className={`col-md-5 ${styles.problemSolutionCard}`}>
            <div className={styles.cardHeader}>
                <img src={`/images/${icon}`} alt="Icon" className={styles.cardIcon} />
                <h4 className={styles.cardTitle}>{title}</h4>
            </div>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
};

export default ProductProblemSolutionCard;
