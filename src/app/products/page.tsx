import React from "react";
import ProductSmartMonitorSection from '../../components/products/ProductSmartMonitorSection';
import TrustedSection from '../../components/TrustedSection';
import ProductMoreProductsSection from '../../components/products/ProductMoreProductsSection';
import ProductProblemsSolutionsSection from '../../components/products/ProductProblemsSolutionsSection';
import ProductRecognisedBySection from '../../components/products/ProductRecognisedBySection';
import ProductVideoTextSection from '../../components/products/ProductVideoTextSection';

const Page = () => {
    return (
        <>
            <ProductSmartMonitorSection />
            <TrustedSection />
            <ProductMoreProductsSection />
            <ProductProblemsSolutionsSection />
            <ProductRecognisedBySection />
            {/*<ProductVideoTextSection />*/}
        </>
    );
};

export default Page;
