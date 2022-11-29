import React from 'react'
import gopure_foot_logo from "../images/gopure_foot_logo.png"

const Footer = () => {
    return (
        <>
            <section id="contactSection">
                <div className="email-bg">
                    <div className="container aos-init aos-animate" data-aos="fade-in">
                        <div className="row"> <div className="col-md-6 col-sm-12 mt-18">
                            <a href="mailto:support@gopure.co.in">Email Us: support@gopure.co.in</a>
                        </div>
                            <div className="col-md-6 col-sm-12">
                                <p>Customer care will be open 24/7 :<a href="tel:9910125804">&nbsp; +91 9910125804</a><br></br><span>10.00 am to 6.00 pm</span> <span className="sm-hide">-</span> <span>(Monday to Friday)</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <div className="footerContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <p><a href="index.html" className="ps-1"><img src={gopure_foot_logo} className="img-fluid foot_logo" alt="Go Pure Logo" /></a></p>
                                <div className="font-18 mt-20 text-green-3 font-600">
                                    <p>Real, Elegant, Authentic Taste of India</p>
                                </div>
                                <div className="font-28 mt-30 text-white font-600"> Connect with us on </div>
                                <ul className="social-icons d-flex">
                                    <li><a href="https://www.facebook.com/GoPureIndia" className="text-white font-28 pr-10" title="Follow Us on Facebook"> <i className="bi bi-facebook"></i></a></li>
                                    <li><a href="https://www.twitter.com/gopureindia" className="text-white font-28 pr-10" title="Follow Us on Twitter"> <i className="bi bi-twitter"></i> </a> </li>
                                    <li> <a href="https://www.instagram.com/gopureindia" className="text-white font-28" title="Follow Us on instagram"> <i className="bi bi-instagram"></i> </a> </li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <div className="heading-sm">Company</div>
                                <ul>
                                    <li><a href="about-us.html" className="text-white">About</a></li>
                                    <li><a href="termsandconditions.html" className="text-white">Terms and Conditions</a></li>
                                    <li><a href="privacy-policy.html" className="text-white">Privacy Policy</a></li>
                                    <li><a href="contact-us.php" className="text-white">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <div className="heading-sm">Useful Links</div>
                                <ul>
                                    <li><a href="/" className="text-white">Offers & Discounts</a></li>
                                    <li><a href="/" className="text-white">Cancellations, Returns and Refunds</a></li>
                                    <li><a href="/" className="text-white">Sell Your Product with Us</a></li>
                                    <li><a href="/" className="text-white">Find Us in Your States</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fuild">
                        <div className="copyright"> &copy; <span id="getCurrentYear"></span> Go Pure. All rights reserved </div>
                        <div className="icon-whatsapp">
                            <a href="https://api.whatsapp.com/send/?phone=919910125804&text=Hi%2C+I+want+to+order+some+products&type=phone_number&app_absent=0" target="new">
                                <i className="bi bi-whatsapp" aria-hidden="true"></i> Whatsapp</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
