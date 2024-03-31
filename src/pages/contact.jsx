import {useRef} from 'react';
import {Link} from 'react-router-dom';
import GithubLogo from '../images/github-mark-white.png';
import LinkedinLogo from '../images/linkedin.png';

export default function Contant(props) {
  const languageButton = useRef(null);
  const githubLink = useRef(null);
  const linkedinLink = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLanguage = () => {
    if (props.language === 'HU'){
      props.setLanguage('EN');
    }
    else{
      props.setLanguage('HU');
    }
    languageButton.current.blur();
  };

  const githubClick = () => {
    githubLink.current.blur();
  };

  const linkedinClick = () => {
    linkedinLink.current.blur();
  };

  
  return (
    <>
      <section className='contact-container'>
        <section className='contact'>
          <h1>{props.contactText['h1']}</h1>
          <p>{props.contactText['p']}</p>
          <form className='form' method='POST' onSubmit={handleSubmit} action='#/'>
            <input type="text" placeholder='Name' name='name' required/>
            <input type="email" placeholder='Email' name='email' required/>
            <textarea placeholder='Message' name='message'  required/>
            <input type="submit" value={props.contactText['button']} className='submit-button' />
          </form>
          <h2 className=''>{props.contactText['h2']}</h2>
          
          <nav className='github-linkedin-button-container'>
            <a rel='noreferrer' target='_blank' href='https://github.com/' className='github-button' onClick={githubClick} ref={githubLink}>
              <img src={GithubLogo} alt='github link' className='github-button-img'/>
              <div className='github-button-text'>github</div>
            </a>
            <a rel='noreferrer' target='_blank' href='https://hu.linkedin.com/' className='linkedin-button' onClick={linkedinClick} ref={linkedinLink}>
              <img src={LinkedinLogo} alt='linkedin link' className='linkedin-button-img'/>
              <div className='linkedin-button-text'>linkedin</div>
            </a>
          </nav>
        </section>
      </section>

      <div className='language' onClick={handleLanguage}>
        <button ref={languageButton}>
          {props.language}
        </button>
      </div>
        
      <nav>
        <Link to='/portfolio' className = {props.arrowLeft} >
          <span></span>
        </Link>
      </nav>
    </>
    
  )
}
