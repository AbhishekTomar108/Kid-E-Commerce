import React from 'react'
import img1 from '../images/img-1.png'
import img2 from '../images/img-2.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'
import img5 from '../images/img-5.png'
import img6 from '../images/img-6.png'
import img7 from '../images/img-7.png'
import img8 from '../images/img-8.png'
import img9 from '../images/img-9.png'
import star from '../images/star.png'

const bestseller = () => {
  return (
    <div className='bestseller'>
        <h2>Bestseller</h2>
        <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
             
            </div>
            <div className="col-6 text-right">
              <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" />
              </a>
              <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="fa fa-arrow-right" />
              </a>
            </div>
            <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img1}/>
                          <div className="card-body">
                            <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          
                        <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>

                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img2} />
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img3} />
                          
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                  
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img4} />
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img5} />
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img6} />
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img7} />
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img8} />
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img9} />
                          <div className="card-body">
                          <span className="card-title">Waldorf Wooden Rocker Balance Board for (3-10years)</span>
                            <br/>
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>7,500</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          <div className='add-to-cart-container'>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default bestseller