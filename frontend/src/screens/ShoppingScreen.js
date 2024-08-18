import React from 'react';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const ShoppingScreen = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => { 
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center">
                <form className="Login col-md-8 col-lg-4 col-11" 
                onSubmit={submitHandler}>
                    <h6>DELIVERY ADDRESS</h6>
                    <input type="text" placeholder="Enter address" required />
                    <input type="text" placeholder="Enter city" required />
                    <input type="text" placeholder="Enter postal code" required />
                    <input type="text" placeholder="Enter country" required />
                    <button type="submit" className="btn btn-primary w-100">
                        <Link to="/payment" className="text-white">
                            Continue
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
}

export default ShoppingScreen;
