import React from 'react';
import SearchBarContaineer from '../../containeers/SearchBarContaineer';
import './MainBody-style.css';
import CsmContaineer from '../../containeers/CsmContaineer';
import SelectedUserContainner from '../../containeers/SelectedUserContainner';
const MainBody = () => {
    return (
        <div className="main-body">
            <div className='h'>
                <h1 id='heading'>Customer Sucess Managers</h1>
            </div>
            <SearchBarContaineer/>
            <CsmContaineer/>
        </div>
    );
}
export default MainBody;
