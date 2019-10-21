import React from 'react';
import Loader from 'react-loader-spinner'

const SpinnerLoader = ({ text }) => {
    return (
        <div className="Center-popup">
            <Loader type="Circles" />
            <div>{text}</div>
        </div>
    );
}

export default SpinnerLoader;
