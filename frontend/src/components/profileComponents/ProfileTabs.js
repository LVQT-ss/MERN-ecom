import React from 'react';

const ProfileTabs = () => {
    return (
        <>
            <form className="row form-container">
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-fn">UserName</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-email">E-mail Address</label>
                        <input
                            className="form-control"
                            type="email"
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-pass">New Password</label>
                        <input
                            className="form-control"
                            type="password"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-confirm-pass">Comfirm Password</label>
                        <input
                            className="form-control"
                            type="password"
                        />
                    </div>
                </div>
                <button className="submit" type="submit">Update Profile</button>
            </form>
        </>
    );
};

export default ProfileTabs;
