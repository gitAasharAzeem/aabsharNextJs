import styles from '../css/successstories/SuccessHeader.module.css';

const SuccessHeader = () => {
    return (
        <section className={styles.successStoriesSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>SUCCESS STORIES</h2>
                <p className={styles.sectionDescription}>
                    Water scarcity is a global issue that affects millions of people, particularly in developing countries. Aabshar is an organization that is making a real impact in tackling this issue by developing innovative solutions that are transforming lives. The innovative water saving nozzle has won international awards and keeps bringing positive change in communities that need water saving solutions.
                </p>
            </div>
        </section>
    );
};

export default SuccessHeader;
