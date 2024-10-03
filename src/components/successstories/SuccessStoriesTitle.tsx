import styles from '../css/successstories/SuccessStoriesTitle.module.css';

const SuccessStoriesTitle = ({title}) => {
    return (
        <div className={styles.successStoriesTitleSection}>
            <div className={styles.successStoriesTitle}>
                {title}
            </div>
        </div>
    );
};

export default SuccessStoriesTitle;
