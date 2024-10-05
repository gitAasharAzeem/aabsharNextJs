import styles from './css/BlogSectionHeading.module.css';

export default function BlogSectionHeading() {
    return (
        <section className={styles.blogsSectionHeading}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.blogsTitle}>BLOGS</h2>
                    <a href="/blogs" className={styles.viewAllLink}>
                        View All <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
