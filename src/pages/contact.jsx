import { useRef } from 'react';
import GithubLogo from '../images/github-mark-white.png';
import LinkedinLogo from '../images/linkedin.png';
import hu from '../language/hu.json';
import eng from '../language/eng.json';


export default function Contact(props) {
  const githubLink = useRef(null);
  const linkedinLink = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const githubClick = () => {
    githubLink.current.blur();
  };

  const linkedinClick = () => {
    linkedinLink.current.blur();
  };


  return (
    <>
      <div className='contact-container'>
        <section className='contact'>
          <h1>{props.language === 'HU' ? hu.contatc.h1 : eng.contact.h1}</h1>
          <p>{props.language === 'HU' ? hu.contatc.p : eng.contact.p}</p>
          <form className='form' method='POST' onSubmit={handleSubmit} action='#/'>
            <input type="text" placeholder={props.language === 'HU' ? hu.contatc.name : eng.contact.name} name='name' required />
            <input type="email" placeholder='Email' name='email' required />
            <textarea placeholder={props.language === 'HU' ? hu.contatc.message : eng.contact.message} name='message' required />
            <input type="submit" value={props.language === 'HU' ? hu.contatc.button : eng.contact.button} className='submit-button' />
          </form>
          <h2 className=''>{props.language === 'HU' ? hu.contatc.h2 : eng.contact.h2}</h2>

          <nav className='github-linkedin-button-container'>
            <a rel='noreferrer' target='_blank' href='https://github.com/' className='github-button' onClick={githubClick} ref={githubLink}>
              <img src={GithubLogo} alt='github link' className='github-button-img' />
              <div className='github-button-text'>github</div>
            </a>
            <a rel='noreferrer' target='_blank' href='https://hu.linkedin.com/' className='linkedin-button' onClick={linkedinClick} ref={linkedinLink}>
              <img src={LinkedinLogo} alt='linkedin link' className='linkedin-button-img' />
              <div className='linkedin-button-text'>linkedin</div>
            </a>
          </nav>
        </section>
      </div>
    </>

  )
}
