import React from 'react';
import styles from '../css/contact/ContactSection.module.css';

const ContactSection: React.FC = () => {
    return (
        <section className={styles.contactSection}>
            <div className="container">
                <h2 className={styles.heading}>CONTACT US</h2>
                <div className="row">
                    {/* Contact Form */}
                    <div className="col-md-8 mb-3">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className={`${styles.formControl} form-control`}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="email"
                                        className={`${styles.formControl} form-control`}
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className={`${styles.formControl} form-control`}
                                        placeholder="Phone"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className={`${styles.formControl} form-control`}
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                  <textarea
                      className={`${styles.formControl} form-control`}
                      rows={5}
                      placeholder="Write a Message"
                      required
                  ></textarea>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="privacyPolicy"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="privacyPolicy">
                                            You agree to our friendly <a href="#">privacy policy</a>.
                                        </label>
                                    </div>
                                    <button type="submit" className={styles.submitButton}>
                                        Send Message <span className={styles.arrow}>➔</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4">
                        <div className={styles.contactInfoCard}>
                            <i className={`${styles.icon} bi bi-telephone`}></i>
                            <h4>Contact Detail</h4>
                            <ul>
                                <li>+92 336 9991 100</li>
                                <li><p>+25 470 7539 799</p></li>
                                <li><p>+52 998 2436 708</p></li>
                                <li><p>+52 998 3613 875</p></li>
                            </ul>
                        </div>

                        <div className={styles.contactInfoCard}>
                            <i className={`${styles.icon} bi bi-geo-alt`}></i>
                            <h4>Office Location</h4>
                            <p>DHA Phase 6, Karachi, Pakistan.</p>
                            <p>A-4, Borderpoint Apartments, Off Lower Kabete
                                Road, Westlands Road, Nairobi, Kenya</p>
                            <p>Mr. Ali Salim AV Tikal MZ 1 LT 1, Habitalia Paraiso, Supermanzana 40, Quintana Roo, Cancun, Mexico 77507</p>
                        </div>

                        <div className={styles.contactInfoCard}>
                            <i className={`${styles.icon} bi bi-envelope`}></i>
                            <h4>Email Address</h4>
                            <p>info@aabshar.net</p>
                            <p>Aabshar@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
