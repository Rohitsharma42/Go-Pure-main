import React, { useState, useEffect } from 'react'

const Products = () => {

  const [topRatedProducts, setTopRatedProducts] = useState([]);

  const getTopRatedProducts = async () => {
    const response = await fetch('http://tastybox.mcnsolutions.net/api/ReviewAndRating/GetTopRatedProduct');
    // console.log(response.json())
    setTopRatedProducts(await response.json());
    // setTopRatedProducts(await response.json().topRatedProducts)
  }

  useEffect(() => {
    getTopRatedProducts();
    setTopRatedProducts(topRatedProducts.topRatedProducts)
  }, []);

  return (
    <>
    {console.log (topRatedProducts)}
      <section className="inner-slider taste-slider-bg">
        <div className="slider-heading aos-init aos-animate" data-aos="fade-in">
          Products
        </div>
      </section>

      <section className="product-wrapper">
        {/* <div className="container">
          <div className="row">
            <div className="product-select">
              <div className="form-group mb-5 d-flex">
                <label htmlFor="selectCategory" className="pt-2 text-center d-block">Select Category</label>
                <select id="selectCategory" className="form-select w-100" onchange="selectProduct(this);">
                  <option selected value="allProducts">All Products</option>
                  <option value="Cookies">Cookies</option>
                  <option value="Dry Fruits">Dry Fruits</option>
                  <option value="Spices">Spices</option>
                  <option value="Namkeen">Namkeen</option>
                  <option value="Petha">Petha</option>
                  <option value="Savories">Savories</option>
                  <option value="Seeds">Seeds</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Pickles">Pickles</option>
                  <option value="Sweets">Sweets</option>
                </select>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container aos-init aos-animate allProducts" data-aos="fade-up">
          <div className="row g-4" id="DivAllProducts">
          {console.log("products: ", topRatedProducts)}
            
              {Object.values(topRatedProducts).map((productImageURL, productName,) => {
                
                return(
                <div className="col-sm-2 col-md-4 col-lg-3 ">
                  <div className="product-card">
                    <div className="img-container">
                      <img src={productImageURL} className="product-img img-fluid" alt="" />
                    </div>
                    <div className="product-inner">
                      <div className="product-name">
                        {productName}
                      </div>
                      <div className="product-seller">
                        <strong>Source</strong> Avon Bakers & Confectioners, Meerut, <a className="text-link"
                          href="uttar-pradesh.html">Uttar Pradesh</a>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })}





          </div>
        </div>
      </section>
    </>
  )
}

export default Products
