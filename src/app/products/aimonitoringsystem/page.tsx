// pages/SmartMonitorPage.tsx
import DataSection from '../../../components/products/aimonitoringsystem/DataSection';
import AISection from '../../../components/products/aimonitoringsystem/AISection';
import ProductMoreProductsSection from '../../../components/products/ProductMoreProductsSection';
import React from "react";
import SuccessStoriesTitle from "@/components/successstories/SuccessStoriesTitle";

const SmartMonitorPage = () => {

    return (
        <>
            <DataSection />
            <AISection />
            <SuccessStoriesTitle title="RELAVANT PRODUCTS"/>
            <ProductMoreProductsSection />
        </>
    );
};

export default SmartMonitorPage;
