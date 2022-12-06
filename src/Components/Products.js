import React, { useState, useEffect } from "react";
import axios from "axios";
// import jsondata from "../1234.json";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState();


  const getTopRatedProducts = async () => {
    // const response = await fetch(
    //   "http://tastybox.mcnsolutions.net/api/ReviewAndRating/GetTopRatedProduct"
    // );
    // setProducts(await response.json());
    axios
      .get(
        "https://gopure.co.in/api/ReviewAndRating/GetTopRatedProduct"
      )
      .then(function (response) {
        console.log("response: ", response);
        setProducts(response.data)
      });
    // console.log("response: ", jsondata);
    // setProducts(jsondata);
  };

  useEffect(() => {
    getTopRatedProducts();
    // const response = fetch(
    //   "http://tastybox.mcnsolutions.net/api/ReviewAndRating/GetTopRatedProduct"
    // );

    // console.log("data: ", data);
    // setProducts(response.json());
    // setProducts(jsondata);
  }, []);

  useEffect(() => {
    setTopRatedProducts(products.topRatedProducts);
  }, [products]);


  return (
    <>
      {/* {console.log(products)} */}
      <section className="inner-slider taste-slider-bg">
        <div className="slider-heading aos-init aos-animate" data-aos="fade-in">
          Products
        </div>
      </section>

      <section className="product-wrapper">
        <div className="container">
          <div className="row">
            <div className="product-select">
            
              <div className="form-group mb-5 d-flex">
              
                <label htmlFor="selectCategory" className="pt-2 text-center d-block">Select Category</label>
                
                <select id="selectCategory" className="form-select w-100">
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
                  <option value="Gajaks">Gajaks</option>
                  <option value="Ghee">Ghee & Oil</option>
                </select>
              
              </div>
            </div>
          </div>
        </div>
        <div
          className="container aos-init aos-animate allProducts"
          data-aos="fade-up"
        >
          <div className="row g-4" id="DivAllProducts">
            {/* {products !== undefined &&
              console.log("products 123: ", topRatedProducts)} */}
            {topRatedProducts !== undefined && topRatedProducts.length > 0
              ? topRatedProducts.map((i, v) => (
                <>
                  {/* {i.productName} */}
                  <div className="col-sm-2 col-md-4 col-lg-3 " key={v}>
                    <div className="product-card">
                      <div className="img-container">
                        <img
                          src={i.productImageURL}
                          className="product-img img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="product-inner">
                        <div className="product-name">{i.productName}</div>
                        <div className="product-rate">Rs. {i.discountPrice + i.igstAmount} | {i.unitType}</div>
                        <div className="product-seller">
                          <strong>Source</strong> Avon Bakers & Confectioners,
                          Meerut,{" "}
                          <a className="text-link" href="uttar-pradesh.html">
                            Uttar Pradesh
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
              : " "}
            {/* {console.log("Products: ", products)} */}
            {/* {Object.values(topRatedProducts).map( */}
            {/* {products !== undefined && 
              // products.topRatedProducts.map((value, index) => (
                
              //     console.log("123: ", value);
                
              //   return (
              //     <div className="col-sm-2 col-md-4 col-lg-3 ">
              //       <div className="product-card">
              //         <div className="img-container">
              //           <img
              //             // src={value.}
              //             className="product-img img-fluid"
              //             alt=""
              //           />
              //         </div>
              //         <div className="product-inner">
              //           <div className="product-name">{value.name}</div>
              //           <div className="product-seller">
              //             <strong>Source</strong> Avon Bakers & Confectioners,
              //             Meerut,{" "}
              //             <a className="text-link" href="uttar-pradesh.html">
              //               Uttar Pradesh
              //             </a>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   );
              // ))}*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
