// components/ContributeHero.tsx
import React from 'react';
import styles from '../css/contribute/ContributeHero.module.css';

const ContributeHero: React.FC = () => {
    return (
        <div id="heroCarousel" className={`carousel slide ${styles.heroCarousel}`} data-bs-ride="carousel">
            <div className={`carousel-inner ${styles.heroSection}`}>
                <div className={`carousel-item active ${styles.carouselItem}`}>
                    <div className="container">
                        <img src="/images/author-image.png" alt="Author" className={`rounded-circle mb-3 ${styles.authorImage}`} />
                        <p className={styles.leadText}>
                            [All] praise is [due] to Allah, Lord of the worlds -
                            <br />
                            <span className={styles.secondLine}>The Entirely Merciful, the Especially Merciful,</span>
                        </p>
                        <p className={styles.authorText}>By Molana Tariq Jameel</p>
                    </div>
                </div>
            </div>
            {/*<div className={styles.carouselControls}>*/}
            {/*    <button className={`btn btn-light ${styles.carouselControl}`} type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">*/}
            {/*        <i className="fas fa-chevron-left"></i>*/}
            {/*    </button>*/}
            {/*    <button id="carouselPause" type="button" className={`btn btn-light ${styles.carouselControlPause}`}>*/}
            {/*        <i className="fas fa-pause"></i>*/}
            {/*    </button>*/}
            {/*    <button className={`btn btn-light ${styles.carouselControl}`} type="button" data-bs-target="#heroCarousel" data-bs-slide="next">*/}
            {/*        <i className="fas fa-chevron-right"></i>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default ContributeHero;
