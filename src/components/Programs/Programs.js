import React from 'react'
import './Program.css';
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='programs' id='programs'>
        {/* headers */}
        <div className='programs-header'>
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>To shap you</span>
        </div>

        <div className='programe-categories'>
            {programsData.map((Program)=>(
                <div className='category'>
                    {Program.image}
                    <span>{Program.heading}</span>
                    <span>{Program.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src={RightArrow} alt=''/>
                    </div>

                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Programs;
