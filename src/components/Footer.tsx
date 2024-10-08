"use client"
import styles from './css/Footer.module.css';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Ensures smooth scrolling
        });
    };

    return (
        <>
            {/* Footer */}
            <footer className={styles.footerSection}>
                {/* Subscribe Section */}
                <section className={styles.subscribeSection}>
                    <div className="container mb-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-8">
                                <h2 className={styles.subscribeHeading}>Subscribe to Newsletter</h2>
                                <form className={`${styles.subscribeForm} d-flex`}>
                                    <input
                                        type="text"
                                        className={`form-control ${styles.subscribeInput}`}
                                        placeholder="Enter your email"
                                    />
                                    <button type="submit" className={styles.btnSubscribe}>
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-1 text-end d-none d-lg-block">
                                <button className={styles.btnScrollUp} onClick={scrollToTop}>
                                    <i className="fas fa-chevron-up"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row mb-5">
                        {/* Brand Information */}
                        <div className="col-md-3 mb-3">
                            <img src="/images/logo.png" alt="Brand Logo" className={styles.footerLogo} />
                            <p>
                                Aabshar helps organizations achieve water, energy, and CO2 sustainability for ESG and SDGs compliance. Our AI monitoring systems not only detect and prevent leaks in real-time but also optimize water usage by up to 98% and significantly lowering CO2 emissions.  Join us in our mission to save 80 billion liters of water by 2028.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-3 mb-4">
                            <h5 className={styles.footerSectionText}>Quick Links</h5>
                            <ul className={styles.footerLinks}>
                                <li className="mb-2">
                                    <a href="/">Home</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/successstories">Case Studies</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/products">Products</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/contact">Contact Us</a>
                                </li>
                                {/*<li>*/}
                                {/*    <a href="/products">Resources</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="col-md-3 mb-4">
                            <h5 className={styles.footerSectionText}>Contact Us</h5>
                            <ul className={styles.footerContact}>
                                <li className="text-black">
                                    <i className="fas fa-phone mb-2 text-black"></i> 0323 4409902
                                </li>
                                <li className="text-black">
                                    <i className="fas fa-envelope text-black"></i> info@aabshar.net
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="col-md-3 mb-3">
                            <h5 className={styles.footerSectionText}>Follow our socials</h5>
                            <div className={styles.footerSocial}>
                                <a href="https://www.facebook.com/aabsharsolutions">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/aabsharsolutions/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://x.com/i/flow/login?redirect_after_login=%2Faabsharsolution">
                                    {/* Custom SVG icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M15.4468 11.0323L25.0131 0.142822H22.747L14.4371 9.59606L7.80492 0.142822H0.15361L10.1849 14.4391L0.15361 25.857H2.41971L11.1895 15.8719L18.1951 25.857H25.8464M3.2376 1.81628H6.71897L22.7453 24.2658H19.2631"
                                                fill="#0D0D0D"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="25.6928" height="25.7143" fill="white" transform="translate(0.15361 0.142822)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/aabshar/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.youtube.com/@AABSHARsolutions">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods Section */}
                    <div className="row">
                        <div className="col-12">
                            <h4 className={styles.paymentMethodsTitle}>Payment Methods</h4>
                            <div className={`${styles.paymentMethodsLogos} d-flex flex-wrap`}>
                                <img src="/images/hbl.png" alt="HBL" className={styles.paymentLogo} />
                                <img src="/images/UnionPay_logo.svg.png" alt="UnionPay" className={styles.paymentLogo} />
                                <img src="/images/visa.png" alt="Visa" className={styles.paymentLogo} />
                                <img src="/images/easypesa.png" alt="Easypaisa" className={styles.paymentLogo} />
                                <img src="/images/JazzCash_logo.png" alt="JazzCash" className={styles.paymentLogo} />
                                <img src="/images/pci-dss-1.png" alt="PCI DSS Compliant" className={styles.paymentLogo} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className={styles.footerBottomSection}>
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className={styles.copyrightText}>Copyright © 2024 Aabshar, All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <ul className={styles.bottomFooterLinks}>
                                <li>
                                    <a href="#">Customer Service</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
