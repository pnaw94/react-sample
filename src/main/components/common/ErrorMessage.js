import React from 'react';

import errorImage from '../../../assets/error-image.png';

const ErrorMessage = ({ text }) => {
    return (
        <div className="Center-popup" >
            <img src={errorImage} alt="Error" />
            <div>{text}</div>
        </div>
    );
}

export default ErrorMessage;
