import React from 'react';
import MainHeader from '../Header/MainHeader';
import './Hero.css';
import Hero_image from '../../assets/hero_image.png';
import Hero_image_back from '../../assets/hero_image_back.png'; 
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'; 
import {motion} from 'framer-motion' 
import CountUp from 'react-countup';

const Hero = () => {
    const transition = {type: 'spring', duration : 5}
    const mobile = window.innerWidth<=768 ? true :false;
  return (
    <div className="hero" id='header'>
        <div className='blur hero-blur'></div>
        <div className="left-h">
            <MainHeader/>
            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left:mobile ? '165': '238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
                
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>
            {/* hero heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'> Shap </span>
                    <span> Your </span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div    >
                    <span>In here we will help you to shape and build Your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/* figures */}
            <div className='figures'>
                <div>
                    <span>
                        <CountUp start={100}  end ={140} delay ='2' preFix='+'/>
                    </span>
                    <span>experts coachs</span>
                </div>
                <div>
                    <span> <CountUp start={800}  end ={978} delay ='2' preFix='+'/> </span>
                    <span>member joined</span>
                </div>
                <div>
                    <span> <CountUp start={0}  end ={50} delay ='2' preFix='+'/> </span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* hero buttons */}
            <div className='hero-button'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>

    {/*             right side of hero section                */}

        <div className="right-h">
            <button className='btn'>Join Now</button>
            <motion.div
            initial={{right:'1rem'}}
            whileInView={{right:'9rem'}}
            transition={{...transition,type:'tween'}}
            className='heart-rate'>
                <img src={Heart} alt='' />
                <span>Hart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/* hero images */}
            <img className='hero-image' src={Hero_image} alt=''/>
            <motion.img initial={{right:'20rem'}}
            whileInView={{right:'25rem'}}
            transition={{...transition,type:'tween'}} className='hero-image-back' src={Hero_image_back} alt=''/>

            <motion.div initial={{right:'55rem'}}
            whileInView={{right:'40rem'}}
            transition={{...transition,type:'tween'}}
             className='calories'>
                <img src={Calories} alt=''/>
                <div>
                    <span>Calories Burend</span>
                    <span>220 Kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default Hero;
