import { Header } from 'antd/es/layout/layout';
import React from 'react'
import Rating from '../components/homeComponents/Rating'
import { Link } from 'react-router-dom';
import Message  from '../components/LoadingError/Error'
import products from '../data/products'
const SingleProduct = ({match}) => {
  const product = products.find((p) => p.id===match.params.id);
  return (
    <>
     <Header/>
      <div className='container single-product'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='single-image'>
              <img  src={product.image} alt={product.name} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='product-dtl'>
              <div className='product-info'>
                <div className='product-name'>
                  {product.name}
                </div>
                <p>{product.description}</p>
                <div className='product-count col-lg-7'>
                  <div className='flex-box d-flex justify-content-between align-items-center'>
                      <h6>Price</h6>
                      <span>${product.price}</span>
                  </div>
                  <div className='flex-box d-flex justify-content-between align-items-center'>
                      <h6>Status</h6>
                      {product.countInStock > 0 ? (
                        <span>In Stock</span>
                      ):(
                        <span className='text-danger'>Out of Stock</span>
                      )}
                  </div>
                  <div className='flex-box d-flex justify-content-between align-items-center'>
                      <h6>Reviews</h6>
                      <Rating
                      value = {product.rating} 
                      text={`${product.numReviews} reviews`}
                      />
                  </div>
                  {product.countInStock >0 ? (
                    <>
                    <div className='flex-box d-flex justify-content-between align-items-center'>
                      <h6>Quantity</h6>
                      <select>
                        {[...Array(product.countInStock).keys()].map((x)=>(
                          <option key={x+1} value={x+1}>{x+1}</option>
                        ))}
                      </select>
                    </div>
                    <button className='btn btn-primary'>Add to Cart</button>
                    </>
                  ):null} 
                </div>
              </div>
            </div>
          </div>
          {/* RATING */}
          <div className='row my-5'>
            <div className='col-md-6'>
                <h6 className='mb-3'>REVIEWS</h6>
                <Message variant={"alert-info mt-3"}>No Reviews</Message>
                <div className='mb-5 mb-md-3 bg-light p-3 shadow-sm rounded'>
                    <strong>Admin joe mama</strong>
                    <Rating/>
                    <span> jan 11 11 </span>
                    <div className='alert alert-info mt-3'>
                      lorem iesumm dasdaosdb asudansdnja nj  asd 
                      asudansdnjaasd
                      a scrollTo dasdaosdb
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
              <h6>write a customer review</h6>
              <div className='mt-4'></div>
              <form>
                <div className='my-4'>
                    <strong>Rating</strong>
                    <select className='col-12 bg-light p-3 mt-2 border-0 rounded'>
                      <option value="">Select...</option>
                      <option value="1">1 - poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                </div>
                <div className='my-4'>
                        <strong>Comment</strong>
                        <textarea className='col-12 bg-light p-3 mt-2 border-0 rounded'></textarea> 
                </div>
                <div className='my-3'>
                    <button className='col-12 bg-black border-0 p-3 rounded text-white'>SUBMIT</button>
                </div>
              </form>
              <div className='my-3'>
                  <Message variant={"alert-warning"}>
                    Please{" "}
                    <Link to={"/login"}>login</Link>{" "}
                    to write a review{" "}
                  </Message>
              </div>
            </div>
          </div>
        </div>
        </div> 
    </>
  )
}

export default SingleProduct
