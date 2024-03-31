import {useRef} from 'react';
import './page.css';
import GithubLogo from '../images/github-mark-white.png';
import LinkedinLogo from '../images/linkedin.png';
import {Link} from 'react-router-dom';
import  Portrait from '../images/portrait.png';
import cv from '../cv/cv.pdf'


export default function Home(props) {
  const languageButton = useRef(null);
  const cvButton = useRef(null);
  const githubLink = useRef(null);
  const linkedinLink = useRef(null);

  const handleLanguage = () => {
    if (props.language === 'HU'){
      props.setLanguage('EN');
    }
    else{
      props.setLanguage('HU');
    }
    languageButton.current.blur();
  };

  const handleCVButton = () => {
    cvButton.current.blur();
  }

  const githubClick = () => {
    githubLink.current.blur();
  };

  const linkedinClick = () => {
    linkedinLink.current.blur();
  };


  return (
    <>
      <section className= {props.aboutClass}>
        <img src={Portrait} alt='Portrait' className='portrait'/>
        <h1>
          {props.homeText['h1']} <span className='name'>Bencs Kevin</span>
        </h1>
        <section>
          {props.homeText['about']} 
        </section>
        <section className='cv-container'>
          <a href={cv} target="_blank" rel="noreferrer" download='Bencs_Kevin_CV' ref={cvButton} onClick={handleCVButton}>
            CV
          </a>
        </section>
      </section>

      <nav className='github-linkedin-home-container'>
        <a rel='noreferrer' target='_blank' href='https://github.com/' className = {props.githubLink} onClick={githubClick} ref={githubLink}>
          <img src={GithubLogo} alt='github link' className={props.github}/>
        </a>
        <a rel='noreferrer' target='_blank' href='https://hu.linkedin.com/' className={props.linkedinLink} onClick={linkedinClick} ref={linkedinLink}>
            <img src={LinkedinLogo} alt='linkedin link' className={props.linkedin}/>
        </a>
      </nav>

      <div className='language' onClick={handleLanguage}>
        <button ref={languageButton}>
          {props.language}
        </button>
      </div>

      <nav >
        <Link to='/portfolio' className = {props.arrowRight}>
            <span></span>
        </Link>
      </nav>
    </>
  )
}
