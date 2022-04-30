import React from 'react';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div style={{marginTop: 50}}>Home</div>
            <div style={{marginTop: 10}}>About</div>
            <div style={{marginTop: 10}}>Contact</div>
            <div style={{marginTop: 10}}>Feedback</div>
        </div>
    )
}

export default Sidebar;