import React from 'react';
import {Link} from 'react-router-dom';
import GithubLogo from '../images/github-mark-white.png';
import LinkedinLogo from '../images/linkedin.png';

export default function Contant(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTextarea = () => {
    document.querySelector('[name = message]').style.height = document.querySelector('[name = message]').scrollHeight + "px";
    console.log(document.querySelector('[name = message]').scrollHeight);
  }

  return (
    
    
    <>
      <section className='contact-container'>
        <section className='contact'>
          <h2>Get in touch</h2>
          <p>If you wanna get in touch, fill up the form or send an email to kevinbencs8@gmail.com.</p>
          <form className='form' method='POST' onSubmit={handleSubmit} action='#/'>
            <input type="text" placeholder='Name' name='name' required/>
            <input type="email" placeholder='Email' name='email' required/>
            <textarea placeholder='Message' name='message' onInput={handleTextarea} required/>
            <input type="submit" value="SUBMIT YOUR MESSAGE" className='submit-button'  />
          </form>
          <h2 className=''>Let's get social</h2>
          <nav className='github-linkedin-button-container'>
            <Link rel='noopener' target='_blank' to='https://github.com/' className='github-button'>
              <img src={GithubLogo} alt='github link' className='github-button-img'/>
              <div className='github-button-text'>github</div>
            </Link>
            <Link rel='noopener' target='_blank' to='https://hu.linkedin.com/' className='linkedin-button'>
              <img src={LinkedinLogo} alt='linkedin link' className='linkedin-button-img'/>
              <div className='linkedin-button-text'>linkedin</div>
            </Link>
          </nav>
          
        </section>
      </section>
        
      <nav>
        <Link to='/portfolio' className={props.arrowLeft} >
          <span></span>
        </Link>
      </nav>
    </>
    
  )
}
