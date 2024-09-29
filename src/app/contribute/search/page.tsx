// /contribute/search/page.tsx
import React from 'react';
import ContributeForm from '@/components/contribute/ContributeForm';
import SearchResults from '@/components/contribute/SearchResults';

// Ensure dynamic rendering is enabled to avoid build-time errors
export const dynamic = 'force-dynamic';

const ContributeSearchPage = () => {
    return (
        <>
            <ContributeForm />
            <SearchResults />
        </>
    );
};

export default ContributeSearchPage;
