import React from 'react';
import ContributeForm from '@/components/contribute/ContributeForm';
import SearchResults from '@/components/contribute/SearchResults';
import axios from 'axios';

// This page component will be server-side rendered, and data will be fetched on the server
const ContributeSearchPage = async ({ searchParams }: { searchParams: { city?: string, size?: string, contribution?: string } }) => {
    // const { city = '', size = '', contribution = '' } = searchParams;
    //
    // // Prepare the query params for the API call
    // const params: any = { sortOption: 'ASC' };
    // if (city) params.city = city;
    // if (size) params.noOfPeople = size;
    // if (contribution) params.contribution = contribution;
    //
    // let mosques = [];
    //
    // try {
    //     const response = await axios.get('https://www.admin.aabshar.net/api/v1/public/mosque/search', {
    //         params,
    //     });
    //     mosques = response.data.data || [];
    // } catch (error) {
    //     console.error('Error fetching mosques:', error);
    // }

    return (
        <>
            <ContributeForm />
            {/*<SearchResults mosques={mosques} />*/}
        </>
    );
};

export default ContributeSearchPage;
