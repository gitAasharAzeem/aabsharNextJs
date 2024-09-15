import styles from '../css/successstories/StandardChartedBackground.module.css';
const StandardChartedBackground = () => {
    return (
        <section className={styles.standardChartedBackgroundSection}>
            {/* Add the play button in the center */}
            <div className={styles.playButton}>
                <img src="../svg/play-icon.svg" alt="Play Button" className={styles.playIcon} />
            </div>
        </section>

    );
};

export default StandardChartedBackground;
