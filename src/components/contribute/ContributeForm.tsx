// components/ContributeForm.tsx
import React from 'react';
import styles from '../css/contribute/ContributeForm.module.css';

const ContributeForm: React.FC = () => {
    return (
        <div className="container">
            <h2 className={styles.formHeading}>Select your Mosque to contribution</h2>
            <form className={`row justify-content-center ${styles.formRow}`}>
                <div className="col-lg-2">
                    <div className="mb-2">City</div>
                    <select className={`form-select ${styles.formSelect}`}>
                        <option value="1">Lahore</option>
                        <option value="2">Karachi</option>
                        <option value="3">Islamabad</option>
                    </select>
                </div>
                <div className="col-lg-2">
                    <div className="mb-2">Area</div>
                    <select className={`form-select ${styles.formSelect}`}>
                        <option value="1" selected>Area 1</option>
                        <option value="2">Area 2</option>
                    </select>
                </div>
                <div className="col-lg-2">
                    <div className="mb-2">City</div>
                    <select className={`form-select ${styles.formSelect}`}>
                        <option value="1" selected>Size 1</option>
                        <option value="2">Size 2</option>
                    </select>
                </div>
                <div className="col-lg-2">
                    <div className="mb-2">City</div>
                    <select className={`form-select ${styles.formSelect}`}>
                        <option value="1" selected>Contribution 1</option>
                        <option value="2">Contribution 2</option>
                    </select>
                </div>
                <div className="col-lg-2">
                    <div className="mb-2">Impact Counter</div>
                    <input type={"text"} className={`form-control `}>
                    </input>
                </div>
                <div className="col-lg-2 text-center">
                    <button type="submit" className={styles.searchButton}>Search</button>
                </div>
            </form>
        </div>
    );
};

export default ContributeForm;
