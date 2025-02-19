import React from 'react';
import { ToastContainer } from 'react-toastify'; // Ensure you have imported ToastContainer

const Toast = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
            <ToastContainer/>
        </div>
    );
};

export default Toast;
