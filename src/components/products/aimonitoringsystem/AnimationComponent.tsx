"use client";
import { useEffect, useState } from 'react';
import styles from '../../css/products/aimonitoringsystem/AnimationComponent.module.css';

const GlowGrid = () => {
    const [activeSequence, setActiveSequence] = useState<number>(0);
    const gridSize = 9;
    const centerIndex = Math.floor(gridSize * gridSize / 2); // Center of the grid (index)

    // Define the glow sequence based on coordinates
    const glowSequence = [
        [{ x: 0, y: 0 }], // Center
        // Diagonal expansion (like the example you provided)
        [{ x: 1, y: -1 }, { x: -1, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }], // Diagonals
        [{ x: 2, y: -2 }, { x: -2, y: -2 }, { x: 2, y: 2 }, { x: -2, y: 2 }],
        [{ x: 3, y: -3 }, { x: -3, y: -3 }, { x: 3, y: 3 }, { x: -3, y: 3 }],
        [{ x: 4, y: -4 }, { x: -4, y: -4 }, { x: 4, y: 4 }, { x: -4, y: 4 }],

        // Straight lines expansion
        [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }], // Plus sign
        [{ x: 2, y: 0 }, { x: -2, y: 0 }, { x: 0, y: 2 }, { x: 0, y: -2 }],
        [{ x: 3, y: 0 }, { x: -3, y: 0 }, { x: 0, y: 3 }, { x: 0, y: -3 }],
        [{ x: 4, y: 0 }, { x: -4, y: 0 }, { x: 0, y: 4 }, { x: 0, y: -4 }],

        // Cross shape
        [{ x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 }],
        [{ x: 2, y: 2 }, { x: -2, y: 2 }, { x: 2, y: -2 }, { x: -2, y: -2 }],

        // Diamond shape
        [{ x: 0, y: 2 }, { x: 2, y: 0 }, { x: -2, y: 0 }, { x: 0, y: -2 }],
        [{ x: 1, y: 3 }, { x: -1, y: 3 }, { x: 1, y: -3 }, { x: -1, y: -3 }],

        // Box shape
        [{ x: -2, y: -2 }, { x: -2, y: 2 }, { x: 2, y: -2 }, { x: 2, y: 2 }], // Corners of a box
        [{ x: -3, y: -3 }, { x: -3, y: 3 }, { x: 3, y: -3 }, { x: 3, y: 3 }],
        [{ x: -4, y: -4 }, { x: -4, y: 4 }, { x: 4, y: -4 }, { x: 4, y: 4 }],
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSequence((prev) => (prev + 1) % glowSequence.length); // Cycle through sequence
        }, 500); // Change every 1 second

        return () => clearInterval(interval);
    }, [glowSequence.length]);

    // Function to convert coordinates to grid index
    const getIndex = (x: number, y: number) => {
        const center = Math.floor(gridSize / 2);
        const newX = center + x;
        const newY = center + y;
        if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
            return newY * gridSize + newX;
        }
        return -1; // Invalid index
    };

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {[...Array(81)].map((_, i) => {
                        const isGlowing = glowSequence[activeSequence].some(({ x, y }) => getIndex(x, y) === i);
                        return (
                            <div
                                key={i}
                                className={`${styles.box} ${isGlowing ? styles.glow : ''}`}
                            ></div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {[...Array(81)].map((_, i) => {
                        const isGlowing = glowSequence[activeSequence].some(({ x, y }) => getIndex(x, y) === i);
                        return (
                            <div
                                key={i}
                                className={`${styles.box} ${isGlowing ? styles.glow : ''}`}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GlowGrid;
