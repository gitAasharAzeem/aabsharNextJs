// pages/SmartMonitorPage.tsx
import SmartMonitorSection from '../../../components/products/smartmonitor/SmartMonitorSection';
import WaterSustainabilitySection from '../../../components/products/smartmonitor/WaterSustainabilitySection';
import WaterReductionSection from '../../../components/products/smartmonitor/WaterReductionSection';
import SubscriptionSection from '../../../components/products/smartmonitor/SubscriptionSection';
import ProductReviewsSection from '../../../components/products/waternozzle/ProductReviews';
import ProductMoreProductsSection from '../../../components/products/ProductMoreProductsSection';
import React from "react";

const SmartMonitorPage = () => {
    const reviews = [
        { image: '/images/review1.png', name: 'User 1', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
        { image: '/images/review2.png', name: 'User 2', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
        { image: '/images/review3.png', name: 'User 3', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
        { image: '/images/review4.png', name: 'User 4', text: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more.' },
    ];

    return (
        <>
            <SmartMonitorSection />
            <WaterSustainabilitySection />
            <WaterReductionSection />
            <SubscriptionSection />
            <ProductReviewsSection reviews={ reviews } />
            <ProductMoreProductsSection />
        </>
    );
};

export default SmartMonitorPage;
