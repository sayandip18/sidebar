import React from 'react';

import './Sidebar.css';

function Sidebar({handleHome, handleAbout, handleContact, handleFeedback}) {
    return (
        <div className="sidebar">
            <div style={{marginTop: 50}}>
                <span onClick={() => handleHome()}>
                    Home
                </span>
            </div>
            <div style={{marginTop: 10}}>
                <span onClick={() => handleAbout()}>
                    About
                </span>
            </div>
            <div style={{marginTop: 10}}>
                <span onClick={() => handleContact()}>
                    Contact
                </span>
            </div>
            <div style={{marginTop: 10}}>
                <span onClick={() => handleFeedback()}>
                    Feedback
                </span>
            </div>
        </div>
    )
}

export default Sidebar;