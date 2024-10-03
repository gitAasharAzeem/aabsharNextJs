import styles from '../css/successstories/SuccessStoriesTitle.module.css';

interface SuccessStoriesTitleProps {
    title: string;  // Explicitly define the type for title
}

const SuccessStoriesTitle: React.FC<SuccessStoriesTitleProps> = ({ title }) => {
    return (
        <div className={styles.successStoriesTitleSection}>
            <div className={styles.successStoriesTitle}>
                {title}
            </div>
        </div>
    );
};

export default SuccessStoriesTitle;
