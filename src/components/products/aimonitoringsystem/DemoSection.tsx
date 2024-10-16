import styles from '../../css/products/aimonitoringsystem/DemoSection.module.css';

const DemoSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <h2 className={styles.heading}>Get answers, fast</h2>
                <p className={styles.description}>
                    Decisions are efficient when intuitive dashboards empower everyone to access data, instantly—no SQL or analytics background required.
                </p>
                <button className={styles.demoButton}>Schedule Demo</button>
            </div>
            <div className={styles.imageSection}>
                <div className={styles.imagePlaceholder}>
                </div>
            </div>
        </div>
    );
};

export default DemoSection;
