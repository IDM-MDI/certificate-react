import React from 'react';
import GoogleIcon from './img/Google_icon-icons.com_60497.svg'

const GoogleOauth = ({onClick,...props}) => {
    return (
        <div onClick={onClick}>
            <img src={GoogleIcon} alt=""/>
        </div>
    );
};

export default GoogleOauth;