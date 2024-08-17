import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
const PaymentScreen = () => {
    window.scrollTo(0,0);
    const submitHandler = (e) =>{
        e.preventDefault();
    }
  return (
    <>
     <Header/> 
     <div className='container d-flex justify-content-center align-items-center'>
        <form
        className="Login2 col-md-8 col-lg-4 col-11"
        onSubmit={submitHandler}
        >
            <h6>Payment method</h6>
            <div className="payment-container">
                <div className="radio-container">
                    <input className="form-check-input" type ="radio" value="paypal"/>
                    <label className="form-check-label">Paypal or Credit Card</label>
                </div>
            </div>

            <button type="submit">
                <Link to="/placeorder" className="text-white">
                Continue
                </Link>
            </button>
        </form>
     </div>
    </>
  )
}

export default PaymentScreen
