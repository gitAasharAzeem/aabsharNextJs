import React from 'react';
import styles from '../css/contact/ImpactSection.module.css';

const ImpactSection: React.FC = () => {
    return (
        <section className={styles.impactSection}>
            <div className="container">
                <h2 className={styles.mainHeading}>WE ARE PROUDLY IMPACT LIVES</h2>
                <p className={styles.paragraph}>
                    We have collaborated with blue chip companies to install Aabshar nozzles in{' '}
                    <strong>schools, colleges, universities, hospitals and local mosques</strong>.
                    As a result, we are able to impact{' '}
                    <span className={styles.highlightRed}>more and more lives everyday</span>, and
                    create a huge impact in saving the water we have for the communities around us.
                </p>

                <h3 className={styles.subHeading}>HOW AABSHAR HELPED A MOTHER</h3>
                <p className={styles.paragraph}>
                    Our work is not just about numbers and statistics, it is about changing lives
                    for the better. One touching story comes from a small village in Pakistan,
                    where a mother was struggling to provide her family with enough water to drink
                    and cook with. She would spend hours each day fetching water from a distant
                    source, leaving little time to care for her family or earn an income. After
                    Aabshar’s product was installed in her home, she was able to save enough water
                    to reduce her daily trips and spend more time with her children.
                </p>

                <h4 className={styles.ctaQuestion}>How you can Impact society?</h4>
                <div className={styles.ctaContainer}>
                    <a href="#" className={styles.ctaButton}>
                        Contribute to Fight Against Water Scarcity!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
