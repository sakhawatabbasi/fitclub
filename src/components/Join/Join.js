import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';


const Join = () => {
                                    //Email send  
    const form= useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9ntsqd1', 'template_phfbdo9', form.current, 'YT5eayF7RGBk9LNmD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
      };
  return (
    <div className='join' id='join-us'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'> Ready TO</span>
                <span> leavel up</span>
            </div>
            <div>
                <span> your body</span>
                <span className='stroke-text'> with us</span>
            </div>
        </div>

        <div className='right-j'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your Email Address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
     
    </div>
  )
}

export default Join;
