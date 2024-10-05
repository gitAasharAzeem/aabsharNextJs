import React from 'react';
import USPsSection from '../components/USPsSection';
import TrustedSection from '../components/TrustedSection';
import WeAreAabsharSection from '../components/WeAreAabsharSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import ImpactCalculatorSection from '../components/ImpactCalculatorSection';
import ReduceConsumptionSection from '../components/ReduceConsumptionSection';
import IndustryFocusSection from '../components/IndustryFocusSection';
import GloballyRecognisedSection from '../components/GloballyRecognisedSection';
import BlogsSection from '../components/BlogsSection';
import BlogSectionHeading from "../components/BlogSectionHeading";

export default function Home() {
  return (
      <>
        <main>
          <USPsSection />
            <TrustedSection />
            <WeAreAabsharSection />
            <SuccessStoriesSection />
            <ImpactCalculatorSection />
            <ReduceConsumptionSection />
            <IndustryFocusSection />
            <GloballyRecognisedSection />
            <BlogSectionHeading />
            <BlogsSection />
        </main>
      </>
  );
}
