import styles from './css/SuccessStoriesSection.module.css';

const SuccessStoriesSection = () => {
    return (
        <section className={styles.successStoriesSection}>
            <div className="container">
                <div className="row">
                    {/* Left Side - Video */}
                    <div className="col-lg-6">
                        {/* 'SUCCESS' Heading above the video */}
                        <h2 className={styles.title}>SUCCESS</h2>
                        <div className={styles.videoWrapper}>
                            {/* Video Thumbnail */}
                            <img
                                src="/images/path-to-thumbnail.png"
                                alt="Success Story Video"
                                className={styles.videoThumbnail}
                            />
                            {/* Adding 'STORIES' text over the video */}
                            <div className={styles.overlayText}>
                                <span className={styles.overlayStoriesText}>STORIES</span>
                            </div>
                            {/* Play Button */}
                            <div className={styles.playButton}></div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="col-lg-6">
                        <p className={styles.description}>
                            At Aabshar, we understand that water is a precious and finite resource that must be
                            conserved for future generations. That’s why we have made it our mission to provide
                            innovative solutions that help individuals and businesses save water.
                        </p>
                        <p className={styles.highlightText}>
                            You can be a Success Story with Just one Tap and you all set up.
                        </p>
                        <a href="#" className={styles.caseStudyLink}>
                            Get inspire with more Successful Case Studies &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;
