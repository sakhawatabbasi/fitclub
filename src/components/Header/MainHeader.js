import React, { useState } from 'react'
import './MainHeader.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const MainHeader = () => {
  
  const mobile = window.innerWidth<=768 ? true :false;
  const [menuOpend,setMenuOpend] = useState(false)

  return (
    <div className='header'>
      <img className='logo' src={logo} alt=''/>
      {menuOpend === false && mobile === true ?(
        <div style={{
        backgroundColor:'var(--appColor)',
        padding:'0.5rem',
        borderRadius:'5px'
        }}
        onClick={()=> setMenuOpend(true)}
        >
          <img src={Bars} alt='' style={{width:'1.5rem', height:'1.5rem' }} />
        </div>
      ) : (
        <ul className='headers-menu'>
          <li><Link onClick={()=> setMenuOpend(false)} activeClass='active' to='header' spy={true} smooth={true}>Home</Link></li>
          <li><Link onClick={()=> setMenuOpend(false)} to='programs' spy={true} smooth={true}>Program</Link></li>
          <li><Link onClick={()=> setMenuOpend(false)} to='reasons' spy={true} smooth={true}>Why Us</Link></li>
          <li><Link onClick={()=> setMenuOpend(false)} to='plane-container' spy={true} smooth={true}>Plans</Link></li>
          <li><Link onClick={()=> setMenuOpend(false)} to='testimonials' spy={true} smooth={true}>Tistimonials</Link></li>
        </ul> 
     )} 
    </div>
  );
};

export default MainHeader;
