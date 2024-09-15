import React from 'react';
import styles from '../css/contact/OurJourney.module.css';
import Image from 'next/image';


const OurJourney: React.FC = () => {
    return (
        <section className={`${styles.journeySection} container`}>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="/images/your-journey.png"
                        alt="Our Journey"
                        className={styles.journeyImage}
                    />
                    <img
                        src="/images/your-product.png"
                        alt="Water Saving Nozzle"
                        className={styles.productImage}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className={styles.title}>OUR JOURNEY</h2>
                    <p className={styles.description}>
                        Water scarcity is a global issue that affects millions of people, particularly in developing countries. Aabshar is an organization that is making a real impact in tackling this issue by developing innovative solutions that are transforming lives. The innovative water saving nozzle has won international awards and keeps bringing positive change in communities that need water saving solutions.
                    </p>
                    <p className={styles.description}>
                        <strong>Ali’s Inspiration:</strong> Not so long ago, Ali was working on a project with a power supply company in a remote area of Pakistan. He witnessed alarming levels of damage water scarcity brought to the locals. People consumed contaminated water and had limited water supply in their taps. The problem inspired him to find a way to help people save water and positively impact their own carbon footprints. With his grandfather’s passion for mechanical engineering as inspiration, he set out on a mission to find a solution that would help people in his communities, his city and his country save water. Thus, began Aabshar.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;
