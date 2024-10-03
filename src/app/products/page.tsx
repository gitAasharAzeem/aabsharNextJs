import React from "react";
import ProductSmartMonitorSection from '../../components/products/ProductSmartMonitorSection';
import ProductTrustedSection from '../../components/products/ProductTrustedSection';
import ProductMoreProductsSection from '../../components/products/ProductMoreProductsSection';
import SuccessStoriesTitle from '../../components/successstories/SuccessStoriesTitle';
import ProductProblemsSolutionsSection from '../../components/products/ProductProblemsSolutionsSection';
import ProductRecognisedBySection from '../../components/products/ProductRecognisedBySection';
import ProductVideoTextSection from '../../components/products/ProductVideoTextSection';

const Page = () => {
    return (
        <>
            <ProductSmartMonitorSection />
            <ProductTrustedSection />
            <SuccessStoriesTitle title="ALL PRODUCTS"/>
            <ProductMoreProductsSection />
            <ProductProblemsSolutionsSection />
            <ProductRecognisedBySection />
            <ProductVideoTextSection />
        </>
    );
};

export default Page;
