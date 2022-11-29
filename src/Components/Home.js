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

      <section class="product-wrapper home-page-all-products-bg">
        <div class="container allProducts">
          <div class="row my-4 section-title">
            <h3 class="heading">Discover the Premium Quality Products</h3>
          </div>
          <div class="text-center">
            <div class="row g-4">
              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Cookies">
                    <div class="img-container">
                      <img src="products-img/all-cookies.jpg" class="product-img img-fluid" alt="" />
                    </div>
                    <div class="product-inner">
                      <div class="product-name">
                        Cookies
                      </div>
                    </div>
                  </a>
                </div>
              </div>


              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Sweets">
                    <div class="img-container">
                      <img src="products-img/all-sweets.jpg" class="product-img img-fluid" alt="" />
                    </div><div class="product-inner">
                      <div class="product-name">
                        Sweets
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Namkeen">
                    <div class="img-container">
                      <img src="products-img/all-namkeens.jpg" class="product-img img-fluid" alt="" />
                    </div><div class="product-inner">
                      <div class="product-name">
                        Namkeen
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Dry-Fruits">
                    <div class="img-container">
                      <img src="products-img/all-dry-fruits.jpg" class="product-img img-fluid" alt="" />
                    </div><div class="product-inner">
                      <div class="product-name">
                        Dry Fruits
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Snacks">
                    <div class="img-container">
                      <img src="products-img/all-snacks.jpg" class="product-img img-fluid" alt="" />
                    </div><div class="product-inner">
                      <div class="product-name">
                        Snacks
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Petha">
                    <div class="img-container">
                      <img src="products-img/Panchhi-Petha/Laal-khand-petha.jpg" class="product-img img-fluid" alt="" />
                    </div><div class="product-inner">
                      <div class="product-name">
                        Petha
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Pickles">
                    <div class="img-container">
                      <img src="products-img/all-pickles.jpg" class="product-img img-fluid" alt="" />
                    </div><div class="product-inner">
                      <div class="product-name">
                        Pickles
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-sm-2 col-md-4 col-lg-3">
                <div class="product-card">
                  <a href="products.html?Spices">
                    <div class="img-container">
                      <img src="products-img/thillais-masala/coriander-powder.png" class="product-img img-fluid" alt="" />
                    </div><div class="product-inner">
                      <div class="product-name">
                        Spices
                      </div>
                    </div>
                  </a>
                </div>
              </div>



            </div>

            <div class="text-center mt-4">
              <a href="products.html" class="btn btn-success btn-lg">View All Products</a>
            </div>

          </div>
          </div>
      </section>

      <section class="timing-wraper">
        <div class="container">
          <div class="row align-items-center justify-content-start">
            <div class="col-xs-12 col-sm-6 text-center">
              <img src={app3} class="img-device" alt="" />
            </div>
            <div class="col-xs-12 col-sm-4 section-title">
              <h3 class="heading">Order Online</h3>
              <div class="subtitle">
                Download The App
              </div>
              <div class="d-flex">
                <a href="https://play.google.com/store/apps/details?id=com.mcn.mcnecomandroid" target="new">
                  <img src={app1} class="img-play-store" alt="go pure play store" />
                </a>
                <a href="https://apps.apple.com/us/app/go-pure-app/id1558129667" target="new">
                  <img src={app2} class="img-ios-store" alt="go pure ios store" />
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
