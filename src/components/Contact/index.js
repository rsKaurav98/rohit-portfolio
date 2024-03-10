import './index.scss';
import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer } from 'react-leaflet'

const Contact = () => {
    const [letterClass , setLetterClass] = useState(`text-animate`)
    const refForm = useRef();

    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       },3000)
   },[])

   const sendEmail = (e)=>{
      
    e.preventDefault()
    emailjs
    .sendForm('service_ey5eyhg', 'template_n1g5h2p', refForm.current, {
      publicKey: 'MntlvB1Deo1XkZP1R',
    })
    .then(
      () => {
        alert('Message Send Successfully!');
        window.location.reload(false)
      },
      (error) => {
        alert('Failed sending Email', error.text);
      },
    );
   }

  return (
    <div className='container contact-page'>
      <div className='text-zone'>
       <h1>
        <AnimatedLetters 
        lettersClass={letterClass}
        strArray={['c','o','n','t','a','c','t',' ','m','e']}
        idx={15}
        />
        <p>
            I am interested in freelance opportunities - especially ambitious large projects. However if you have other request or questions, don't hesitate to contact me using below form either.
        </p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required/>
                </li>
                <li>
                    <input placeholder='Subject' type='text' name='subject' required/>
                </li>
                <li>
                    <textarea placeholder='Message' name='message' required>
                    </textarea>
                </li>
                <li>
                   <input type='submit' className='flat-button' value='SEND'/>
                </li>
            </ul>
          </form>
        </div>
       </h1>
      </div>
      <div className='info-map'>
        Rohit Singh Kaurav,
        <br/>
        India,
        <br/>
        Gwalior 474006 <br/>
        Madhya Pradesh <br/>
        <span>kauravrohit98@gmail.com</span>
      </div>
      <div className='map-wrap'>
        <MapContainer>

        </MapContainer>
      </div>
    </div>
  )
}

export default Contact