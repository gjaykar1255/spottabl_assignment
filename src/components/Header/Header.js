import React from 'react';
import companyLogo from '../../Images/logo.png'
import './header-style.css';
const Header = () => {
    return (
        <div className='main-header'>
            <div>
                <img id='logo-image' src={companyLogo} alt="" />
            </div>
            <div id='header-info'>
                <h2>YOUR SPOTTABL TEAM</h2>
                <p>Spottabl supports you all throughout</p>
            </div>
        </div>
    );
}
export default Header;
