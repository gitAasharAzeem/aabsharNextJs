import React from 'react';

import ContributeForm from '../../../components/contribute/ContributeForm';
import ContributeMosqueList from '../../../components/contribute/ContributeMosqueList';

const ContributeDetailsByArea = () => {
    return (
        <>
            <ContributeForm />
            <ContributeMosqueList groupBy="city" />
        </>
    );
}

export default ContributeDetailsByArea;