"use client"
import { useEffect, useState, useRef, useCallback } from 'react';
import styles from '@/components/css/products/aimonitoringsystem/ScrollQuestions.module.css';

const ScrollQuestions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isQuestionSectionActive, setIsQuestionSectionActive] = useState(false); // Detect if we are in the question section
    const questions = [
        "Who are my customers?",
        "What are they doing?",
        "How do I grow them?"
    ];

    // Typing the ref as HTMLDivElement | null
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = useCallback((event: any) => {
        if (!sectionRef.current) return; // If sectionRef is null, exit the function

        const sectionTop = sectionRef.current.getBoundingClientRect().top;

        // Detect when the section reaches the middle of the viewport
        if (sectionTop < window.innerHeight / 2 && sectionTop > 0) {
            setIsQuestionSectionActive(true);
        }

        if (!isQuestionSectionActive) {
            return;
        }

        // Prevent normal page scrolling if we are in the question section
        event.preventDefault();

        // Scroll down to show the next question
        if (event.deltaY > 0 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                } else {
                    // End of questions, allow page scroll to continue
                    setIsQuestionSectionActive(false); // Allow scrolling after last question
                }
                setIsAnimating(false);
            }, 400); // Adjust time between question changes
        }

        // Scroll up to show the previous question
        if (event.deltaY < 0 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
                } else {
                    // Back to the first question, allow normal scrolling again upwards
                    setIsQuestionSectionActive(false); // Allow scrolling after reaching the first question
                }
                setIsAnimating(false);
            }, 200);
        }
    }, [isAnimating, isQuestionSectionActive, currentQuestionIndex, questions.length]);

    useEffect(() => {
        // Add the wheel event listener with { passive: false } to allow preventDefault
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={styles.section} ref={sectionRef}>
            <h1 className={styles.heading}>It&apos;s okay to not have all the answers</h1> {/* Fix unescaped quote */}
            <div className={styles.questionBox}>
                <p className={styles.question}>{questions[currentQuestionIndex]}</p>
            </div>
        </div>
    );
};

export default ScrollQuestions;
