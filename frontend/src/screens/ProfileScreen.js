import React from 'react';
import Header from '../components/Header';

const ProfileScreen = () => {
    window.scrollTo(0, 0);
  
    return (
        <>
            <Header />
            <div className="container mt-lg-5 mt-3">
                <div className="row align-items-start">
                    <div className="col-lg-4 p-8 shadow">
                        <div className="author-card pb-0 pb-md-3">
                            <div className="author-card-cover"></div>
                            <div className="author-card-profile row">
                                <div className="author-card-avatar col-md-5">
                                    <img src="./images/user.png" alt="userprofileimage" />
                                </div>
                                <div className="author-card-details col-md-7">
                                    <h5 className="author-card-name mb-2">
                                        <strong>Admin Doe</strong>
                                    </h5>
                                    <span className="author-card-position">
                                        Joined Dec 12, 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='wizard pt-3'>
                            <div className='d-flex align-items-start'>
                                <div
                                    className='nav align-items-start flex-column col-12 nav-pills me-3'
                                    id='v-pills-tab'
                                    role='tablist'
                                    aria-orientation='vertical'
                                >
                                    <button
                                        className='nav-link active'
                                        id='v-pills-home-tab'
                                        data-bs-toggle='pill'
                                        data-bs-target='#v-pills-home'
                                        type='button'
                                        role='tab'
                                        aria-controls='v-pills-home'
                                        aria-selected="true"
                                    >
                                        Profile Settings
                                    </button>
                                    <button
                                        className='nav-link d-flex justify-content-between'
                                        id='v-pills-orders-tab'
                                        data-bs-toggle='pill'
                                        data-bs-target='#v-pills-orders'
                                        type='button'
                                        role='tab'
                                        aria-controls='v-pills-orders'
                                        aria-selected="false"
                                    >
                                        Orders List
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Panels */}
                    <div className="col-lg-8 mt-4 mt-lg-0">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                {/* Profile Settings Content */}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-orders"
                                role="tabpanel"
                                aria-labelledby="v-pills-orders-tab"
                            >
                                {/* Orders List Content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileScreen;
