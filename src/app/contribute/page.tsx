import React from 'react';

import ContributeHero from '../../components/contribute/ContributeHero';
import ContributeSuccessStories from '../../components/contribute/ContributeSuccessStories';
import ContributeCarousel from '../../components/contribute/ContributeCarousel';
import ContributeForm from '../../components/contribute/ContributeForm';
import ContributeMosques from '../../components/contribute/ContributeMosques';
import ContributeSize from '../../components/contribute/ContributeSize';
import ContributeTapImpact from '../../components/contribute/ContributeTapImpact';
import ContributeArea from "@/components/contribute/ContributeArea";
import ContributeContributionAmount from "@/components/contribute/ContributeContributionAmount";


const Contribute = () => {

    return (
        <>
            <ContributeHero />
            <ContributeSuccessStories />
            <ContributeCarousel />
            <ContributeTapImpact />
            <ContributeForm />
            <ContributeMosques />
            <ContributeArea />
            <ContributeContributionAmount />
            <ContributeSize />

        </>
    );
}

export default Contribute;
