import styles from '../css/successstories/ProblemSolvingSection.module.css';

const ProblemSolvingSection = () => {
    return (
        <section className={styles.problemSolvingSection}>
            <div className="container">
                <div className="row align-items-center my-3">
                    <div className="col-md-4">
                        <div className={styles.videoContainer}>
                            <img src="/images/problemstandardcharterd.png" alt="Problem Image" className={styles.videoThumbnail} />
                            <div className={styles.playButton}>
                                <img src="/svg/play-icon.svg" alt="Play Button" className={styles.playIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2 className={styles.problemSolvingTitle}>We solve the Standard Chartered Problem</h2>
                        <p className={styles.problemSolvingDescription}>
                            We’ve noticed that 59% of users in our “Gen Z” cohort used “split payments” in the last 30 days. What if we moved the split payments option earlier in the checkout flow?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolvingSection;
