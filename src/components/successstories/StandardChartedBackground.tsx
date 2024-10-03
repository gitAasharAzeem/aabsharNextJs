import styles from '../css/successstories/StandardChartedBackground.module.css';

const StandardChartedBackground = () => {
    return (
        <section className={styles.standardChartedBackgroundSection}>
            {/* Embed the YouTube video */}
            <div className={styles.videoWrapper}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ZX4ianxvTH8?si=-tW0qv7u69WHwD2I"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default StandardChartedBackground;
