import React, {useState} from 'react';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

import './Feedback.css';

function Feedback() {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index);
        console.log(index);
    }

    return (
        <div className="feedback">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                >
                    {
                        index <= rating? <AiFillStar size={30} /> : <AiOutlineStar size={30} />
                    }
                </div>
                );
            })}
        </div>
    )
}

export default Feedback;