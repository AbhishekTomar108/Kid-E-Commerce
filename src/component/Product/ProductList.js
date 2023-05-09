import React from "react";
import image1 from "../../images/img-1.png";
import { Link } from "react-router-dom";
// import image2 from "./image/MusicalTruck_460x.webp";
// import image3 from "./image/Walker__1__Square_460x.webp";
// import image from "./image/Collection_Page_Banner_-_Desktop-100.webp";

export default function ProductList(props) {
  return (
    <>
    
      <div>
              <div className="text">
        <h1 style={{ fontSize: "30px" }}>{props.prouctTitle}</h1>
       
        <p style={{ textAlign: "center" }}>
        {props.prouctTitleDesc}
        </p>
      </div>
      <div className="Active Product-list-card-container">
        <div className="card">
          <h6 className="right-offer-h2">Offer</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
             <Link to='/productdetails'> Add To Cart</Link>
            </a>
          </div>
        </div>
        <div className="card">
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        <div className="card">
          <h6 className="offer-h2">60% off</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        
      </div>

      <div className="Active Product-list-card-container">
        <div className="card">
          <h6 className="right-offer-h2">Offer</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        <div className="card">
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        <div className="card">
          <h6 className="offer-h2">60% off</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        
      </div>
      <div className="Active Product-list-card-container">
        <div className="card">
          <h6 className="right-offer-h2">Offer</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        <div className="card">
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        <div className="card">
          <h6 className="offer-h2">60% off</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        
    
      </div>
      <div className="Active Product-list-card-container">
        <div className="card">
          <h6 className="right-offer-h2">Offer</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        <div className="card">
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        <div className="card">
          <h6 className="offer-h2">60% off</h6>
          <a href="/" target="_blank" rel="">
            <img src={image1} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <a href="/" target="_blank" rel="">
                Baby Activity Walker (1-3 years old)
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                87 reviews
              </a>
              <br />
              <a href="/" target="_blank" rel="">
                <span class="money">₹3,799</span>
              </a>
            </p>
            <a href="#" className="btn btn-success cart-btn">
              Add To Cart
            </a>
          </div>
        </div>
        
      </div>
      </div>
    </>
  );
}