import React, { useState } from "react";
import "./EightBall.css";

function EightBall(props) {
    const {answers} = props; 
    const [color, setColor] = useState('black');
    const [message, setMessage] = useState('Think of a Question'); 
    
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length); 
        setColor(answers[randomIndex].color);
        setMessage(answers[randomIndex].msg);   
    };

    return (
        <div className="Eightball" style={{backgroundColor: color}} onClick={handleClick}>
            <p className="EightBall-message">{message}</p>
        </div>
    );
}

export default EightBall;