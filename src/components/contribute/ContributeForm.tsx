"use client"; // Ensure this is a client component
import { useRouter } from 'next/navigation'; // Use from 'next/navigation' in Next.js 13+
import React, { useState, useEffect } from 'react';
import styles from '../css/contribute/ContributeForm.module.css';

const ContributeForm: React.FC = () => {

    const router = useRouter(); // Router for navigation
    const [city, setCity] = useState('');
    const [size, setSize] = useState('');
    const [contribution, setContribution] = useState('');

    // Ensure that the component only runs client-side
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (mounted) {
            // Construct the query parameters dynamically
            const queryParams: { [key: string]: string } = {};
            if (city) queryParams.city = city;
            if (size) queryParams.size = size;
            if (contribution) queryParams.contribution = contribution;

            // Create the query string by joining the parameters that have values
            const queryString = Object.keys(queryParams)
                .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
                .join('&');

            // Redirect to the /contribute/search page with valid query params
            router.push(`/contribute/search?${queryString}`);
        }
    };

    if (!mounted) {
        return null; // Return null during SSR to avoid router errors
    }

    return (
        <div className="container">
            <h2 className={styles.formHeading}>Select your Mosque to contribute</h2>
            <form className={`row my-auto justify-content-center ${styles.formRow}`} onSubmit={handleSubmit}>
                <div className="col-lg-3">
                    <div className="mb-2">City</div>
                    <select
                        className={`form-select ${styles.formSelect}`}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option value="">Please Select City</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <div className="mb-2">Size</div>
                    <select
                        className={`form-select ${styles.formSelect}`}
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        <option value="">Please Select Size</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500+</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <div className="mb-2">Contribution</div>
                    <select
                        className={`form-select ${styles.formSelect}`}
                        value={contribution}
                        onChange={(e) => setContribution(e.target.value)}
                    >
                        <option value="">Please Select Contribution</option>
                        <option value="1500">1500 Pkr</option>
                        <option value="2500">2500 Pkr</option>
                        <option value="5000">5000 Pkr</option>
                        <option value="10000">10000 Pkr</option>
                        <option value="12500">12500 Pkr</option>
                    </select>
                </div>
                <div className="col-lg-3 text-center my-auto">
                    <button type="submit" className={styles.searchButton}>Search</button>
                </div>
            </form>
        </div>
    );
};

export default ContributeForm;
