import styles from './css/BlogsSection.module.css';

export default function BlogsSection() {
    return (
        <section className={styles.blogsSection}>
            <div className="container">
                {/*<div className="d-flex justify-content-between align-items-center">*/}
                {/*    <h2 className={styles.blogsTitle}>Blogs</h2>*/}
                {/*    <a href="/blogs" className={styles.viewAllLink}>*/}
                {/*        View All <span>→</span>*/}
                {/*    </a>*/}
                {/*</div>*/}

                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.blogCard}>
                            <img src="/images/techstars.png" alt="Blog 1" className={styles.blogImage} />
                            <div className={styles.blogContent}>
                                <span className={styles.blogCategory}>High-growth Companies</span>
                                <h3 className={styles.blogTitle}>
                                    Techstars WaterTech.
                                </h3>
                                {/*<div className={styles.blogInfo}>*/}
                                {/*    <span><i className="fa fa-clock-four"></i> August 17, 2023</span>*/}
                                {/*    <span><i className="fa fa-user"></i> Harper Evans</span>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.blogCard}>
                            <img src="/images/savepak.png" alt="Blog 2" className={styles.blogImage} />
                            <div className={styles.blogContent}>
                                <span className={styles.blogCategory}>Save Pakistan</span>
                                <h3 className={styles.blogTitle}>
                                    USAID Pakistan.
                                </h3>
                                {/*<div className={styles.blogInfo}>*/}
                                {/*    <span><i className="fa fa-clock-four"></i> August 17, 2023</span>*/}
                                {/*    <span><i className="fa fa-user"></i> Harper Evans</span>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.blogCard}>
                            <img src="/images/awards.png" alt="Blog 3" className={styles.blogImage} />
                            <div className={styles.blogContent}>
                                <span className={styles.blogCategory}>Award Winning Tech </span>
                                <h3 className={styles.blogTitle}>
                                    Accredited by Over 50 Orgs
                                </h3>
                                {/*<div className={styles.blogInfo}>*/}
                                {/*    <span><i className="fa fa-clock-four"></i> August 17, 2023</span>*/}
                                {/*    <span><i className="fa fa-user"></i> Harper Evans</span>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
