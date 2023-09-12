import React from 'react';
import img1 from '../assets/img/Template1.png';
import img2 from '../assets/img/Template2.png';

const RadioButtons = (props) => {
    return (
        <div className="options__cards">
            <div className="options__card">
                <h3>Template 1</h3>
                <input type="radio" value="option1" checked={props.selectedOption === 'option1'} onChange={props.handleChange} />
                <img src={img1} alt="template" />
            </div>
            <div className="options__card">
                <h3>Template 2</h3>
                <input type="radio" value="option2" checked={props.selectedOption === 'option2'} onChange={props.handleChange} />
                <img src={img2} alt="template" />
            </div>
        </div>
    );
}

export default RadioButtons;
