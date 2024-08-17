import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='Announcement'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center display-none'>
                            <p>0328789712</p>
                            <p>levietquocthinh@gmail.com</p>
                        </div>
                        <div className="col-12 col-lg-16 justify-content-center justify-content-lg">
                            <Link to="">
                                <i className='fa fa-facebook-f'></i>
                            </Link>
                            <Link to="">
                                <i className='fa fa-instagram'></i>
                            </Link>
                            <Link to="">
                                <i className='fa fa-linkedid-in'></i>
                            </Link>
                            <Link to="">
                                <i className='fa fa-youtube'></i>
                            </Link>
                            <Link to="">
                                <i className='fa fa-youtube'></i>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            {/* HEADER  */}
            <div className='header'>
                <div className='container'>
                    {/* MOBILE */}
                    <div className='mobile-header'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6 d-flex align-items-center '>
                                    <Link className='navbar-brand' to="/">
                                        <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xGjlz6Jm5iELVBmFHGF09F5iNdyyjKwrFw&s' />
                                    </Link>
                                </div>
                                <div className='col-6 d-flex align-items-center justify-content-end Log'>
                                    <div className='btn-group'>
                                        <button
                                            type='button'
                                            className='name-button dropdown-toggle'
                                            data-toggle="dropdown"
                                            aria-hashpopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <div className='dropdown-menu'>
                                            <Link className='dropdown-item' to="/profile">
                                                Profile
                                            </Link>
                                            <Link className='dropdown-item' to="#">
                                                Log out
                                            </Link>
                                        </div>
                                    </div>
                                    <Link className='cart-mobile-icon' to="/cart">
                                        <i className='fas fa-shopping-bag'></i>
                                        <span className='badge'>4</span>
                                    </Link>
                                </div>
                                <div className='col-12 d-flex align-items-center'>
                                    <form className='input-group'>
                                        <input
                                            type='search'
                                            className="form-control rounded search"
                                            placeholder="search"
                                        />
                                        <button className='search-button' type='submit'>search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PC HEADER */}
                    <div className='pc-header'>
                        <div className='row'>
                            <div className='col-md-3 col-4 d-flex align-items-center'>
                                <Link className='navbar-brand' to="/">
                                    <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xGjlz6Jm5iELVBmFHGF09F5iNdyyjKwrFw&s' />
                                </Link>
                            </div>
                            <div className="col-md-6 col-8 d-flex align-items-center">
                                <form className='input-group'>
                                    <input
                                        type='search'
                                        className="form-control rounded search"
                                        placeholder="search"
                                    />
                                    <button className='search-button' type='submit'>search</button>
                                </form>
                            </div>
                            <div className='col-md-3 d-flex align-items-center justify-content-end Lo'>
                                <div className='btn-group'>
                                    <button
                                        type='button'
                                        className='name-button dropdown-toggle'
                                        data-toggle="dropdown"
                                        aria-hashpopup="true"
                                        aria-expanded="false"
                                    >
                                        hi, admin joe mama
                                    </button>
                                    <div className='dropdown-menu'>
                                        <Link className='dropdown-item' to="/profile">
                                            Profile
                                        </Link>
                                        <Link className='dropdown-item' to="#">
                                            Log out
                                        </Link>
                                    </div>
                                </div>
                                <Link className='cart-mobile-icon' to="/cart">
                                    <i className='fas fa-shopping-bag'></i>
                                    <span className='badge'>4</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
