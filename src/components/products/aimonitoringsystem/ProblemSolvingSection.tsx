import styles from '../../css/products/aimonitoringsystem/ProblemSolvingSection.module.css';

const ProblemSolvingSection = () => {
    return (
        <section className={styles.problemSolvingSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className={styles.videoContainer}>
                            <img src="/images/problemstandardcharterd.png" alt="Problem Image" className={styles.videoThumbnail} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2 className={styles.problemSolvingTitle}>We solve the US Apparel Problem</h2>
                        <p className={styles.problemSolvingDescription}>
                            How US Apparel & Textile Reduced Water Wastage by 87% Social Impact 41 Million Liters of Water Saved
                        </p>
                        <br/>
                        <br/>
                        <a href="/successstories"> <b>view All Case Studies </b></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolvingSection;
