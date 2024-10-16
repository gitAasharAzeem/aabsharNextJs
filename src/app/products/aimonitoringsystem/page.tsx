import React from "react";

// pages/SmartMonitorPage.tsx
import DataSection from '../../../components/products/aimonitoringsystem/DataSection';
import AISection from '../../../components/products/aimonitoringsystem/AISection';
import ProductMoreProductsSection from '../../../components/products/ProductMoreProductsSection';
import SuccessStoriesTitle from "@/components/successstories/SuccessStoriesTitle";
import AnimationComponent from "@/components/products/aimonitoringsystem/AnimationComponent";
import ProblemSolvingSection from "@/components/products/aimonitoringsystem/ProblemSolvingSection";
import DemoSection from "@/components/products/aimonitoringsystem/DemoSection";
import ImpactSection from "@/components/products/aimonitoringsystem/ImpactSection";
import ScrollQuestions from "@/components/products/aimonitoringsystem/ScrollQuestions";

const SmartMonitorPage = () => {

    return (
        <>
            <DataSection />
            <AISection />
            <ProblemSolvingSection />
            <DemoSection />
            <ImpactSection />
            <AnimationComponent />
            <ScrollQuestions />
            <SuccessStoriesTitle title="RELAVANT PRODUCTS"/>
            <ProductMoreProductsSection />
        </>
    );
};

export default SmartMonitorPage;
