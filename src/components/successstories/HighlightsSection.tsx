import styles from '../css/successstories/HighlightsSection.module.css';

const HighlightsSection = () => {
    return (
        <section className={styles.highlightsSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className={styles.highlightsTitle}>Highlights</h2>
                    </div>
                    <div className="col-md-3">
                        <p className={styles.highlightsDescription}>
                            Passionate about sustainability and driving the future of transportation.
                        </p>
                    </div>
                    <div className="col-md-2 col-4 text-center">
                        <h3 className={styles.highlightStat}>$5B</h3>
                        <p className={styles.billion} >Over $5 billion <br/> invested</p>
                    </div>
                    <div className="col-md-2 col-4 text-center">
                        <h3 className={styles.highlightStat}>$5B</h3>
                        <p className={styles.billion}>Over $5 billion <br/> invested</p>
                    </div>
                    <div className="col-md-2 col-4 text-center">
                        <h3 className={styles.highlightStat}>$5B</h3>
                        <p className={styles.billion}>Over $5 billion <br/>invested</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
