import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const CartScreen = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            {/* Cart */}
            <div className='container'>
                <div className='alert alert-info text-center mt-3'>
                    Total Cart Products: <Link className="text-success mx-2" to="/cart">(4)</Link>
                </div>

                {/* CART ITEMS */}
                <div className="cart-items row">
                            <div className="remove-button d-flex justify-content-center align-items-center col-md-1">
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="cart-image col-md-3">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjb3mOvBYhWSgTsQ7YCMEcBsvnDdMPaTUNw&s' alt='nike' />
                            </div>
                            <div className="cart-text col-md-4 d-flex align-items-center">
                                <Link to="#">
                                    <h4>Nike Girls Shoe</h4>
                                </Link>
                            </div>
                            <div className="cart-qty col-md-2 col-sm-5 mt-md-0 mt-3 d-flex flex-column">
                                <h6>QUANTITY</h6>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div className="cart-price mt-3 mt-md-0 col-md-2 d-flex align-items-center justify-content-end">
                                <h6>SUBTOTAL</h6>
                                <h4>$456</h4>
                            </div>
                        </div>
                        {/* END OF CART ITEMS */}
                        
                        <div className="total mt-4">
                            <span className="sub">Total:</span>
                            <span className="total-price">$567</span>
                        </div>
                        <hr />
                        <div className="cart-buttons d-flex align-items-center row">
                            <Link to="/" className="col-md-6">
                                <button className="btn btn-outline-primary w-100">Continue Shopping</button>
                            </Link>
                            <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                                <button className="btn btn-primary w-100">
                                    <Link to="/shipping" className="text-white">
                                        Checkout
                                    </Link>
                                </button>
                            </div>
                        </div>
            </div>
        </>
    );
}

export default CartScreen;
