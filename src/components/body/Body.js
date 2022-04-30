import React from 'react';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Feedback from '../pages/feedback/Feedback';
import Home from '../pages/home/Home';

import './Body.css';

function Body({home, about, contact, feedback}) {
    let result;

    if(home) {
        result = <Home />
    }
    if(about) {
        result = <About />
    }
    if(contact) {
        result = <Contact />
    }
    if(feedback) {
        result = <Feedback />
    }
    return (
        <div className="body">
            {result}
        </div>
    )
}

export default Body;