import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from '../components/Header'; // Import Header component

const Login = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
                <form className="Login col-md-8 col-lg-4 col-11">
                    <input type="email" placeholder="Email" className="form-control mb-3" />
                    <input type="password" placeholder="Password" className="form-control mb-3" />
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <p className="text-center mt-3">
                        <Link to={"/register"}>Create Account</Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;
