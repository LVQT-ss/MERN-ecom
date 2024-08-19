import React from 'react'
import Rating from './Rating';
import Pagination from './Pagination';
import products from '../../data/products'
import { Link } from 'react-router-dom';
const ShopSection = () => {
    return (
        <>
            <div className='container'>
                <div className='section'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 article'>
                            <div className='shopcontainer row'>
                                {products.map((product) => (
                                    <div className="shop col-lg-4 col-md-6 col-sm-6" key={product.id}>
                                        <div className="border-product">
                                            <Link to={`/products/${product.id}`}>
                                                <div className="shopBack">
                                                    <img src={product.image} alt={product.name} />
                                                </div>
                                            </Link>
                                            <div className="shoptext">
                                                <p>
                                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                                </p>
                                            
                                            <Rating 
                                            value={product.rating}
                                            text={`${product.numReviews} reviews `}
                                            />
                                            <h3>${product.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* PAGINATION */}
                                <Pagination/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ShopSection
