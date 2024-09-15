import ProductProblemSolutionCard from './ProductProblemSolutionCard';
import styles from '../css/products/ProductProblemsSolutionsSection.module.css';

const ProductProblemsSolutionsSection = () => {
    const problems = [
        { icon: 'leaking.png', title: 'Water Leakage', description: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar. Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.' },
        { icon: 'electric-pole.png', title: 'Electricity Consumption', description: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar. Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.' },
        { icon: 'waste-water.png', title: 'Water Wastage', description: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar. Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.' },
        { icon: 'co2.png', title: 'CO2', description: 'Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar. Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.' }
    ];

    return (
        <section className={styles.problemSolutionSection}>
            <div className="container">
                <h2 className={styles.problemsHeading}>PROBLEMS TO SOLUTIONS</h2>
                <div className={styles.problemsDescription}>
                    At Aabshar, we understand that water is a precious and finite resource that must be conserved for future generations.
                    That’s why we have made it our mission to provide innovative solutions that help individuals and businesses save water.
                </div>
                <div className="row justify-content-center">
                    {problems.map((problem, index) => (
                        <ProductProblemSolutionCard key={index} icon={problem.icon} title={problem.title} description={problem.description}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductProblemsSolutionsSection;
