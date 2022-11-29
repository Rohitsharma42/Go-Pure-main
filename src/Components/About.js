import React from 'react'
import Vision from "../images/our-vision.png"
import Mission from "../images/our-mission.png"

function About() {
    return (
        <div>
            <section className="inner-slider">
                <div className="slider-heading aos-init aos-animate" data-aos="fade-in">
                    About US
                </div>
            </section>

            <section className="about-us">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="heading">
                        WE ARE GO PURE
                    </div>
                    <p data-aos="fade-in" className="aos-init aos-animate">
                        Go Pure is an online/offline platform that believes in fulfilling temptations and cravings by having well-known sweets, namkeens, snacks, cookies, dry fruits, pickles, gajak, revri, etc. from the topmost brands all over India, which are an integral part of our lives. We are efficient enough to feed your hunger and deliver a wide variety of cuisines, snacks, and desserts with user-friendly, forbidden tastes and mesmerizing flavors covering entire India.
                    </p>
                    <p>
                        We are associated with 100+ popular brands that provide unique, authentic, elegant, and traditional tastes with exclusive discounts, coupons, and offers. Go Pure has immersed itself as a local brand for enjoying a wide array of divine tastes of all over Indian sweets of choice without compromising on quality and taste.
                    </p>
                    <p>
                        As we all know, festivals and celebrations seem incomplete without sweets that play an important role in following our tradition loaded with sweet stuff. We provide all kinds of online sweets in bulk as well, in various shapes, sizes, content, and colors to suit all budgets and preferences. We not only deliver sweets but also serve happiness to enjoy special occasions, events, parties, festivals, weddings and more.
                    </p>
                    <p>
                        We've reconstructed some of your favorite childhood delicacies to bring back great memories of your past. From the crispy namkeen to the juicy petha, there are many delicacies from North-South Indian sweets to East-West Indian sweets and snacks that would make any sweet tooth crave and become addicted to them.
                    </p>
                    <p>
                        Choose from our wide variety of collections of North-South-East-West Indian traditional sweets such as Kalakand, flavored petha, murabba, cookies, mango pickle, chikki gajak, indori namkeens, kaju katli, chocolate bites, nan khatai, milk cake, patisa, and others, all of which have excellent taste, freshness, prompt delivery, and uniqueness.
                    </p>
                </div>
            </section>

            <section className="our-vision light-bg">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row">
                        <div className="col-sm-4">
                            <figure className="p-20 pl-0">
                                <img src={Vision} className="img-fluid img-thumbnail p-0 pt-10" alt="" />
                            </figure>
                        </div>
                        <div className="col-sm-8">
                            <div className="heading text-start pl-0 mt-40">Our Vision</div>
                            <p data-aos="fade-in" className="text-start aos-init aos-animate mt-40">
                                Our aim is to process with the same zeal and to create a renowned brand locally and globally that imparts happiness and enjoyment loaded with sweet, salty, crispy, crunchy, and spicy foods to our customers. Customer satisfaction is our utmost priority, with the huge dream of providing customers with the finest sweet treats and exceeding customer expectations. We pledge to uphold their ideology and thought process for future generations.
                            </p>

                            <div className="mt-40">
                                <a href="our-vision.html" className="btn btn-success">Read More..</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="our-mission">
                <div className="container aos-init aos-animate" data-aos="fade-up">

                    <div className="row">
                        <div className="col-sm-8">
                            <div className="heading text-start pl-0 mt-40">Our Mission</div>
                            <p data-aos="fade-in" className="text-start aos-init aos-animate mt-40">
                                With a remark of Purity, Originality & Customer satisfaction, we aim to deliver the best possible high-quality sweets at the lowest prices in the market. When it comes to contributing richness to any occasion, being the chosen choice is to be an integral and essential part of any happy and cheerful occasion in any family, whether they live abroad or in India. We want to be renowned as "Traditional, Authentic, Elegant Sweets & Snacks, Desi Ghee, Pickle Providers," so we're always working to improve and expand the diversity of our flavors and tastes.
                            </p>

                            <div className="mt-40">
                                <a href="our-mission.html" className="btn btn-success">Read More..</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <figure className="p-20 pr-0">
                                <img src={Mission} className="img-fluid img-thumbnail p-0 pt-10" alt="" />
                            </figure>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
