import React from "react";
import HeroSection from '../../../components/products/waternozzle/HeroSection';
import ProductDetailsSection from '../../../components/products/waternozzle/ProductDetails';
import ProductDetailsSection2 from '../../../components/products/waternozzle/ProductDetails2';
import ProductReviewsSection from '../../../components/products/waternozzle/ProductReviews';
import ProductMoreProductsSection from '../../../components/products/ProductMoreProductsSection';
import styles from '../../../components/css/products/waternozzle/WaterNozzlePage.module.css';

const WaterNozzlePage = () => {
    const sinlgeNozzleDetails = {
        image1: '/images/singlemode.png',
        image2: '/images/singlewaternozzle2.png',
        name: 'Single Mode Water Nozzle',
        description1: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar..',
        description2: 'Additional description here.',
        features: [
            { icon: 'electric-pole.png', text: 'Save Electricity up to 70%' },
            { icon: 'leaking.png', text: 'Save Water 92%' },
        ],
        rating: '★★★★☆',
        price: '200 PKR',
    };

    const doubleNozzleDetails = {
        image1: '/images/doublewaternozzle2.png',
        image2: '/images/singlewaternozzle2.png',
        name: 'Double Mode Water Nozzle',
        description1: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar..',
        description2: 'Additional description here.',
        features: [
            { icon: 'electric-pole.png', text: 'Save Electricity up to 70%' },
            { icon: 'leaking.png', text: 'Save Water 92%' },
        ],
        rating: '★★★★☆',
        price: '200 PKR',
    };

    const reviews = [
        { image: '/images/review1.png', name: 'User 1', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
        { image: '/images/review2.png', name: 'User 2', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
        { image: '/images/review3.png', name: 'User 3', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
        { image: '/images/review4.png', name: 'User 4', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
    ];


    return (
        <div className={styles.waterNozzlePage}>
            <HeroSection />
            <ProductDetailsSection product={ sinlgeNozzleDetails } />
            <ProductDetailsSection2 product={ doubleNozzleDetails } />
            <ProductReviewsSection reviews={ reviews } />
            <ProductMoreProductsSection />
        </div>
    );
};

export default WaterNozzlePage;
