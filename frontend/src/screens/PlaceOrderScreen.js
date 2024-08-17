import React from 'react'
import { Link } from 'react-router-dom';

const PlaceOrderScreen = () => {
    window.scrollTo(0,0);
    const placeorderScreen = (e) =>{
        e.PreventDefault();
    }
  return (
    <>
        <div className='container'>
           <div className='row order-detail'>
            <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
                <div className='row'>
                    <div className='col-md-4 center'>
                        <div className='alert-success order-box'>
                            <i className='fas fa-user'></i>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <h5>
                            <strong>Customer</strong>
                        </h5>
                        <p>Admin doe</p>
                        <p>levietquocthinh@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
                <div className='row'>
                    <div className='col-md-4 center'>
                        <div className='alert-success order-box'>
                            <i className='fas fa-truck-moving'></i>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <h5>
                            <strong>Order info</strong>
                        </h5>
                        <p>Shipping: thinhle</p>
                        <p>Pay method : Paypal</p>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
                <div className='row'>
                    <div className='col-md-4 center'>
                        <div className='alert-success order-box'>
                            <i className='fas fa-truck-moving'></i>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <h5>
                            <strong>Delivery To</strong>
                        </h5>
                        <p>Address : this is not mai hom</p>
                    </div>
                </div>
            </div>
            </div> 
            <div className='row order-products justify-content-between'>
                <div className='col-lg-8'>
                    <div className='order-product row'>
                        <div className='col-md-3 col-6'>
                            <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s' alt='product'/>
                        </div>
                        <div className='col-md-5 col-6 d-flex align-items-center '>
                            <Link to={"/"}>
                            <h6>Girls nike shoes</h6>
                            </Link>
                        </div>
                        <div className='mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center'>
                            <h4>QUANTITY</h4>
                            <h6>4</h6>
                        </div>
                        <div className='mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-end flex-column'>
                            <h4>SUBTOTAL</h4>
                            <h6>$567</h6>
                        </div>
                    </div>
                </div>
                {/* TOTAL */}
                <div className='col-lg-3 d-flex align-items-end flex-column mt-5'>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Products</strong>
                                </td>
                                <td>$567</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Shipping</strong>
                                </td>
                                <td>$123</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Tax</strong>
                                </td>
                                <td>$5</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Total</strong>
                                </td>
                                <td>$700</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='submit' onClick={placeorderScreen}>
                        <Link to="/order" className='text-white'>PLACE ORDER</Link>
                    </button>
                </div>
            </div>
            </div> 
    </>
  )
}

export default PlaceOrderScreen
