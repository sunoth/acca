import React from 'react';
import expertFacultyImage from '../../expert-faculty-image.png'
import placementsImage from '../../placements-image.png'
import successImage  from '../../success-image.png'
import './index.css';

function WhyChooseUs(){
    return(
        <div className='wcu-container' id="WhyChooseUs">
            <h1 className='wcu-heading'>Why Choose Us?</h1>
            <hr className='wcu-underline'/>
            <div className='wcu-items-container'>
                <div className='wcu-item-container'>
                    <img src={expertFacultyImage} alt="expert-faculty" className='wcu-image'/>
                    <h2 className='wcu-item-heading'>Expert Faculty</h2>
                    <p className='wcu-item-description'>Our qualified Faculty with significant practical experience guide students every step of the way</p>
                </div>
                <div className='wcu-item-container'>
                    <img src={successImage} alt="success" className='wcu-image'/>
                    <h2 className='wcu-item-heading'>Complete Success Package</h2>
                    <p className='wcu-item-description'>
                        Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.
                    </p>
                </div>
                <div className='wcu-item-container'>
                    <img src={placementsImage} alt="placements" className='wcu-image'/>
                    <h2 className='wcu-item-heading'>Placements</h2>
                    <p className='wcu-item-description'>
                        Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs