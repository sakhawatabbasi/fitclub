import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
const Plans = () => {
  return (
    <div className='plane-container' id='plane-container'>
      <div className='blur plan-blur-1'></div>
      <div className='blur plan-blur-2'></div>
      <div className='programs-header'>
        <span  className='stroke-text'>Ready to start</span>
        <span>your journey</span>
        <span className='stroke-text'>Now with us</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((Plans, i)=>(
          <div className="plan" key={i}>
            {Plans.icon}
            <span>{Plans.name}</span>
            <span>RS {Plans.price}</span>

            <div className='features'> 
            {Plans.features.map((feature, i)=>(
              <div className= "feature">
                <img src={whiteTick}alt=''/>
                <span key={i}>{feature}</span>
              </div>
            ))}
            </div>
            <div>
              <span>see more benefites {'->'} </span>
            </div>
            <button className='btn'>Join Now</button>

          </div>
        ))}

      </div>


    </div>
  )
}

export default Plans;
