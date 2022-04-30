import React from 'react';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Feedback from '../pages/feedback/Feedback';
import Home from '../pages/home/Home';

import './Body.css';

function Body() {
    return (
        <div className="body">
            <Feedback />
        </div>
    )
}

export default Body;