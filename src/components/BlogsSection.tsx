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
                            <img src="/images/sports-blog-1.png" alt="Blog 1" className={styles.blogImage} />
                            <div className={styles.blogContent}>
                                <span className={styles.blogCategory}>Standard Chartered</span>
                                <h3 className={styles.blogTitle}>
                                    Sustainable Growth through Economic Marketing.
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
                            <img src="/images/sports-blog-2.png" alt="Blog 2" className={styles.blogImage} />
                            <div className={styles.blogContent}>
                                <span className={styles.blogCategory}>Title Name</span>
                                <h3 className={styles.blogTitle}>
                                    Sustainable Growth through Economic Marketing.
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
                            <img src="/images/sports-blog-2.png" alt="Blog 3" className={styles.blogImage} />
                            <div className={styles.blogContent}>
                                <span className={styles.blogCategory}>Marketing</span>
                                <h3 className={styles.blogTitle}>
                                    Sustainable Growth through Economic Marketing.
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
