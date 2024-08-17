import React from 'react'

const Register = () => {
    window.scrollTo(0, 0)
  return (
    <>  
    <Header />
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <form className="Login col-md-8 col-lg-4 col-11">
            <input type='text' placeholder='Username'/>
            <input type="email" placeholder="Email" className="form-control mb-3" />
            <input type="password" placeholder="Password" className="form-control mb-3" />
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <p className="text-center mt-3">
                <Link to={"/login"}>I Have Account <strong>Login</strong></Link>
            </p>
        </form>
    </div>
</>
  );
};

export default Register
