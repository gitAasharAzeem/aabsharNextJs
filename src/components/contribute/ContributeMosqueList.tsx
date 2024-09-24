"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/contribute/ContributeDetailsAreaSection.module.css";

interface Mosque {
    id: string;
    name: string;
    area: string;
    city: string;
    totalContribution: number;
    image: { featuredImage: { path: string } };
}

interface Grouping {
    [key: string]: Mosque[];
}

interface ContributeMosqueListProps {
    groupBy: "city" | "area" | "contribution" | "size";  // Define the different types of grouping
}

const ContributeMosqueList: React.FC<ContributeMosqueListProps> = ({ groupBy }) => {
    const [mosques, setMosques] = useState<Mosque[]>([]);
    const [displayedMosques, setDisplayedMosques] = useState<Grouping>({});
    const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

    // Fetch the mosque data from the API
    useEffect(() => {
        const fetchMosques = async () => {
            try {
                const response = await axios.get("https://www.admin.aabshar.net/api/v1/public/mosque/top");
                const mosqueData: Mosque[] = response.data.data;

                // Group mosques based on the provided grouping type
                const groupedMosques = groupMosques(mosqueData, groupBy);

                // Initial display of 6 mosques per group
                const initialDisplay: Grouping = {};
                Object.keys(groupedMosques).forEach(group => {
                    initialDisplay[group] = groupedMosques[group].slice(0, 6);
                });

                setDisplayedMosques(initialDisplay);
                setMosques(mosqueData);
            } catch (error) {
                console.error("Error fetching mosque data:", error);
            }
        };
        fetchMosques();
    }, [groupBy]);

    // Show more mosques for a given group
    const showMoreMosques = (group: string) => {
        const groupMosques = mosques.filter(mosque => {
            return groupMosquesByKey(mosque, groupBy) === group;
        });
        setDisplayedMosques({
            ...displayedMosques,
            [group]: groupMosques,
        });
        setExpandedGroups([...expandedGroups, group]);
    };

    // Group mosques based on the key (city, area, contribution, size)
    const groupMosques = (mosques: Mosque[], groupBy: string): Grouping => {
        const grouped: Grouping = {};

        mosques.forEach(mosque => {
            const key = groupMosquesByKey(mosque, groupBy);
            if (!grouped[key]) {
                grouped[key] = [];
            }
            grouped[key].push(mosque);
        });

        return grouped;
    };

    // Get the grouping key (city, area, contribution, size)
    const groupMosquesByKey = (mosque: Mosque, groupBy: string): string => {
        if (groupBy === "city") {
            return mosque.city;
        } else if (groupBy === "area") {
            return `${mosque.area} > ${mosque.city}`;
        } else if (groupBy === "contribution") {
            if (mosque.totalContribution >= 1000000) return "1M+";
            if (mosque.totalContribution >= 500000) return "500k-1M";
            if (mosque.totalContribution >= 200000) return "200k-500k";
            return "<200k";
        } else if (groupBy === "size") {
            // Example size-based grouping
            if (mosque.totalContribution >= 500000) return "Large";
            if (mosque.totalContribution >= 200000) return "Medium";
            return "Small";
        }
        return "Other";
    };

    return (
        <div className="container">
            <div className={styles.contributeMosqueList}>
                {Object.keys(displayedMosques).map(group => (
                    <div key={group} className={styles.contributeMosqueCitySection}>
                        <h2 className={styles.cityTitle}>{group}</h2>
                        <p className={styles.citySubtitle}>
                            Our comprehensive guide to strategies for entrepreneurs and leaders offers valuable insights, practical advice.
                        </p>
                        <div className={styles.contributeMosquesGrid}>
                            {displayedMosques[group].map(mosque => (
                                <div key={mosque.id} className={styles.contributeMosqueCard}>
                                    <div className={styles.imageContainer}>
                                        <img src={mosque.image.featuredImage.path} alt={mosque.name} className={styles.mosqueImage} />
                                        <div className={styles.mosqueNameOverlay}>{mosque.name}</div>
                                    </div>
                                    <div className={styles.mosqueDetails}>
                                        <p className={styles.mosqueDetailsText}>Taps: 5 | Optimizer: 3</p>
                                        <p className={styles.mosqueDetailsText}>Monthly Water Bill: $200</p>
                                        <p className={styles.mosqueDetailsText}>Monthly Electricity Bill: $150</p>
                                        <p className={styles.mosqueDetailsText}>CO2 Footprint: 500 kg</p>
                                        <p className={styles.mosqueDetailsText}>Mosque Capacity: 100 people</p>
                                    </div>
                                    <a href="#" className="btn-contribute active my-3">
                                        Contribute
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                            <path d="M15.4857 10.7L11.4232 6.75C10.9316 6.26667 10.5107 5.73392 10.1607 5.15175C9.81072 4.56975 9.63572 3.93583 9.63572 3.25C9.63572 2.34717 9.9468 1.57983 10.569 0.948C11.1913 0.316 11.9469 0 12.8357 0C13.3569 0 13.8456 0.114583 14.3017 0.34375C14.7577 0.572917 15.1524 0.883333 15.4857 1.275C15.8191 0.883333 16.2133 0.572917 16.6685 0.34375C17.1238 0.114583 17.6116 0 18.132 0C19.0261 0 19.7836 0.316 20.4045 0.948C21.0253 1.57983 21.3357 2.34717 21.3357 3.25C21.3357 3.93583 21.1628 4.56975 20.817 5.15175C20.4711 5.73392 20.0524 6.26667 19.5607 6.75L15.4857 10.7ZM15.4857 8.1L18.1982 5.4125C18.5065 5.10417 18.7941 4.77708 19.0607 4.43125C19.3274 4.08542 19.4607 3.69167 19.4607 3.25C19.4607 2.875 19.3333 2.55208 19.0785 2.28125C18.8236 2.01042 18.5094 1.875 18.1357 1.875C17.8857 1.875 17.6566 1.93333 17.4482 2.05C17.2399 2.16667 17.0524 2.31667 16.8857 2.5L15.4857 4.175L14.0857 2.5C13.9191 2.31667 13.7316 2.16667 13.5232 2.05C13.3149 1.93333 13.0857 1.875 12.8357 1.875C12.4621 1.875 12.1478 2.01042 11.893 2.28125C11.6381 2.55208 11.5107 2.875 11.5107 3.25C11.5107 3.69167 11.6441 4.08542 11.9107 4.43125C12.1774 4.77708 12.4649 5.10417 12.7732 5.4125L15.4857 8.1ZM6.58572 16.175L13.4857 18.075L19.3607 16.25C19.3024 16.075 19.2045 15.9354 19.067 15.8313C18.9295 15.7271 18.7357 15.675 18.4857 15.675H13.5357C13.0691 15.675 12.7024 15.6583 12.4357 15.625C12.1691 15.5917 11.9024 15.525 11.6357 15.425L9.36072 14.6875L9.88572 12.85L11.9315 13.525C12.2176 13.6083 12.542 13.6729 12.9045 13.7188C13.267 13.7646 13.7691 13.7917 14.4107 13.8H14.5357C14.5357 13.6167 14.4816 13.4381 14.3732 13.2643C14.2649 13.0903 14.1357 12.9772 13.9857 12.925L8.21072 10.825H6.58572V16.175ZM0.860718 19.5V8.95H8.21072C8.31905 8.95 8.42738 8.96042 8.53572 8.98125C8.64405 9.00208 8.74747 9.02892 8.84597 9.06175L14.6357 11.2C15.1607 11.3917 15.5878 11.7104 15.917 12.1563C16.2461 12.6021 16.4107 13.15 16.4107 13.8H18.4857C19.2774 13.8 19.9503 14.0542 20.5045 14.5625C21.0586 15.0708 21.3357 15.7833 21.3357 16.7V17.6L13.5482 20.05L6.58572 18.1V19.5H0.860718ZM2.73572 17.625H4.71072V10.825H2.73572V17.625Z" fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                        {!expandedGroups.includes(group) && displayedMosques[group].length >= 6 && (
                            <button onClick={() => showMoreMosques(group)} className={styles.contributeMoreButton}>
                                View More
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContributeMosqueList;
