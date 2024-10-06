"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from 'next/link';
import styles from './css/Header.module.css';


const Header = () => {
    const pathname = usePathname(); // Get current path information

    useEffect(() => {
        // Dynamically import Bootstrap JS for the client-side only
        if (typeof window !== "undefined") {
            // @ts-ignore
            import("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/images/logo.png" alt="Aabshar Logo" height="40" />
                </a>
                <a
                    href="#"
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </a>
                <div className="navbar-collapse collapsed collapse" id="navbarNav">
                    <ul className={`navbar-nav mx-auto ${styles.navbarNav}`} >
                        <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li
                            className={`nav-item ${
                                pathname === "/successstories" ? "active" : ""
                            }`}
                        >
                            <a className="nav-link" href="/successstories">
                                Success Stories
                            </a>
                        </li>


                        {/* Products Link and Dropdown */}
                        <li className={`dropdown nav-item ${
                            pathname === "/products" || pathname === "/products/waternozzle" || pathname === "/products/smartmonitor" || pathname === "/products/aimonitoringsystem" ? "active" : ""
                        }`}>
                            <div className="d-flex align-items-center">
                                {/* Main Products Link */}
                                <Link className="nav-link" href="/products">
                                    Products
                                </Link>

                                {/* Dropdown Icon */}
                                <a
                                    className={`dropdown-toggle ${styles.dropDownToggleAfter}`}
                                    href="#"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarDropdown"
                                    aria-controls="navbarDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    style={{ marginLeft: '8px' }} // Adds space between the link and the dropdown icon
                                >
                                    <i className={`fas fa-chevron-down`}></i>
                                </a>
                            </div>
                            <ul id="navbarDropdown" className={`dropdown-menu ${styles.navbarDropdown}`} aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" href="/products/waternozzle">
                                        Water Nozzle
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="/products/smartmonitor">
                                        Smart Monitor
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="/products/aimonitoringsystem">
                                        AI Monitoring System
                                    </Link>
                                </li>
                                {/*<li>*/}
                                {/*    <Link className="dropdown-item" href="/products/product3">*/}
                                {/*        Product 3*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <Link className="dropdown-item" href="/products/product4">*/}
                                {/*        Product 4*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/*<li*/}
                        {/*    className={`nav-item ${*/}
                        {/*        pathname.includes("/resources") ? "active" : ""*/}
                        {/*    }`}*/}
                        {/*>*/}
                        {/*    <a className="nav-link" href="/resources">*/}
                        {/*        Resources*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li className={`nav-item ${pathname === "/contact" ? "active" : ""}`}>
                            <a className="nav-link" href="/contact">
                                Contact Us
                            </a>
                        </li>
                        <li
                            className={`nav-item ${pathname === "/contribute" ? "active" : ""}`}
                        >
                            <a className="nav-link d-flex align-items-center " href="/contribute">
                                <div className="btn-contribute">
                                    Contribute
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                        <path d="M15.4857 10.7L11.4232 6.75C10.9316 6.26667 10.5107 5.73392 10.1607 5.15175C9.81072 4.56975 9.63572 3.93583 9.63572 3.25C9.63572 2.34717 9.9468 1.57983 10.569 0.948C11.1913 0.316 11.9469 0 12.8357 0C13.3569 0 13.8456 0.114583 14.3017 0.34375C14.7577 0.572917 15.1524 0.883333 15.4857 1.275C15.8191 0.883333 16.2133 0.572917 16.6685 0.34375C17.1238 0.114583 17.6116 0 18.132 0C19.0261 0 19.7836 0.316 20.4045 0.948C21.0253 1.57983 21.3357 2.34717 21.3357 3.25C21.3357 3.93583 21.1628 4.56975 20.817 5.15175C20.4711 5.73392 20.0524 6.26667 19.5607 6.75L15.4857 10.7ZM15.4857 8.1L18.1982 5.4125C18.5065 5.10417 18.7941 4.77708 19.0607 4.43125C19.3274 4.08542 19.4607 3.69167 19.4607 3.25C19.4607 2.875 19.3333 2.55208 19.0785 2.28125C18.8236 2.01042 18.5094 1.875 18.1357 1.875C17.8857 1.875 17.6566 1.93333 17.4482 2.05C17.2399 2.16667 17.0524 2.31667 16.8857 2.5L15.4857 4.175L14.0857 2.5C13.9191 2.31667 13.7316 2.16667 13.5232 2.05C13.3149 1.93333 13.0857 1.875 12.8357 1.875C12.4621 1.875 12.1478 2.01042 11.893 2.28125C11.6381 2.55208 11.5107 2.875 11.5107 3.25C11.5107 3.69167 11.6441 4.08542 11.9107 4.43125C12.1774 4.77708 12.4649 5.10417 12.7732 5.4125L15.4857 8.1ZM6.58572 16.175L13.4857 18.075L19.3607 16.25C19.3024 16.075 19.2045 15.9354 19.067 15.8313C18.9295 15.7271 18.7357 15.675 18.4857 15.675H13.5357C13.0691 15.675 12.7024 15.6583 12.4357 15.625C12.1691 15.5917 11.9024 15.525 11.6357 15.425L9.36072 14.6875L9.88572 12.85L11.9315 13.525C12.2176 13.6083 12.542 13.6729 12.9045 13.7188C13.267 13.7646 13.7691 13.7917 14.4107 13.8H14.5357C14.5357 13.6167 14.4816 13.4381 14.3732 13.2643C14.2649 13.0903 14.1357 12.9772 13.9857 12.925L8.21072 10.825H6.58572V16.175ZM0.860718 19.5V8.95H8.21072C8.31905 8.95 8.42738 8.96042 8.53572 8.98125C8.64405 9.00208 8.74747 9.02892 8.84597 9.06175L14.6357 11.2C15.1607 11.3917 15.5878 11.7104 15.917 12.1563C16.2461 12.6021 16.4107 13.15 16.4107 13.8H18.4857C19.2774 13.8 19.9503 14.0542 20.5045 14.5625C21.0586 15.0708 21.3357 15.7833 21.3357 16.7V17.6L13.5482 20.05L6.58572 18.1V19.5H0.860718ZM2.73572 17.625H4.71072V10.825H2.73572V17.625Z" fill="white"/>
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav right-nav-items">
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">*/}
                        {/*        SignUp / LogIn*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <a className="nav-link" href="/contribute">
                                <i className="fas fa-search"></i>
                            </a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">*/}
                        {/*        <i className="fas fa-shopping-cart"></i>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
