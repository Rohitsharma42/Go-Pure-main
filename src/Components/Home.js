import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../images/Kalakand.png";
import slide2 from "../images/cookies.png";
import slide3 from "../images/dry-fruits.png";
import slide4 from "../images/home-made-achar.png";
import slide5 from "../images/indore-namkeen.png";
import slide6 from "../images/nan-khatai.png";
import slide7 from "../images/pure-desi-cow-ghee.png";
import slide8 from "../images/panchhi-petha.png";
import slide9 from "../images/patisa.png";
import app1 from "../images/google_Play_logo.png"
import app2 from "../images/ios-app-store.png"
import app3 from "../images/go_pure_ios_app.gif"

const Home = () => {
  return (
    <div>
      <section className="slider container mb-3">
        <Carousel>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide4}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide5}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide6}
              alt="Six slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide7}
              alt="Seven slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide8}
              alt="Eight slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block w-100"
              src={slide9}
              alt="Nine slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="product-wrapper home-page-all-products-bg">
        <div className="container allProducts">
          <div className="row my-4 section-title">
            <h3 className="heading">Discover the Premium Quality Products</h3>
          </div>
          <div className="text-center">
            <div className="row g-4">
              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Cookies">
                    <div className="img-container">
                      <img src="products-img/all-cookies.jpg" className="product-img img-fluid" alt="" />
                    </div>
                    <div className="product-inner">
                      <div className="product-name">
                        Cookies
                      </div>
                    </div>
                  </a>
                </div>
              </div>


              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Sweets">
                    <div className="img-container">
                      <img src="products-img/all-sweets.jpg" className="product-img img-fluid" alt="" />
                    </div><div className="product-inner">
                      <div className="product-name">
                        Sweets
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Namkeen">
                    <div className="img-container">
                      <img src="products-img/all-namkeens.jpg" className="product-img img-fluid" alt="" />
                    </div><div className="product-inner">
                      <div className="product-name">
                        Namkeen
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Dry-Fruits">
                    <div className="img-container">
                      <img src="products-img/all-dry-fruits.jpg" className="product-img img-fluid" alt="" />
                    </div><div className="product-inner">
                      <div className="product-name">
                        Dry Fruits
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Snacks">
                    <div className="img-container">
                      <img src="products-img/all-snacks.jpg" className="product-img img-fluid" alt="" />
                    </div><div className="product-inner">
                      <div className="product-name">
                        Snacks
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Petha">
                    <div className="img-container">
                      <img src="products-img/Panchhi-Petha/Laal-khand-petha.jpg" className="product-img img-fluid" alt="" />
                    </div><div className="product-inner">
                      <div className="product-name">
                        Petha
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Pickles">
                    <div className="img-container">
                      <img src="products-img/all-pickles.jpg" className="product-img img-fluid" alt="" />
                    </div><div className="product-inner">
                      <div className="product-name">
                        Pickles
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-2 col-md-4 col-lg-3">
                <div className="product-card">
                  <a href="products.html?Spices">
                    <div className="img-container">
                      <img src="products-img/thillais-masala/coriander-powder.png" className="product-img img-fluid" alt="" />
                    </div><div className="product-inner">
                      <div className="product-name">
                        Spices
                      </div>
                    </div>
                  </a>
                </div>
              </div>



            </div>

            <div className="text-center mt-4">
              <a href="products.html" className="btn btn-success btn-lg">View All Products</a>
            </div>

          </div>
          </div>
      </section>

      <section className="timing-wraper">
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-xs-12 col-sm-6 text-center">
              <img src={app3} className="img-device" alt="" />
            </div>
            <div className="col-xs-12 col-sm-4 section-title">
              <h3 className="heading">Order Online</h3>
              <div className="subtitle">
                Download The App
              </div>
              <div className="d-flex">
                <a href="https://play.google.com/store/apps/details?id=com.mcn.mcnecomandroid" target="new">
                  <img src={app1} className="img-play-store" alt="go pure play store" />
                </a>
                <a href="https://apps.apple.com/us/app/go-pure-app/id1558129667" target="new">
                  <img src={app2} className="img-ios-store" alt="go pure ios store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
