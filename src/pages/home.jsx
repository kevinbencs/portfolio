import { useRef } from 'react';
import './page.css';
import GithubLogo from '../images/github-mark-white.png';
import LinkedinLogo from '../images/linkedin.png';
import Portrait from '../images/portrait.jpg';
import cv from '../cv/Bencs_Kevin_CV.pdf';
import hu from '../language/hu.json';
import eng from '../language/eng.json';


export default function Home(props) {

  const cvButton = useRef(null);
  const githubLink = useRef(null);
  const linkedinLink = useRef(null);

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
      <section className={`about ${props.aboutClass}`}>
        <img src={Portrait} alt='Portrait' className='portrait' />
        <h1>
          {props.language === 'HU' ? hu.home.h1 : eng.home.h1} <span className='name'>Bencs Kevin</span>
        </h1>
        <p>
          {props.language === 'HU' ? hu.home.about : eng.home.about}
        </p>
        <div className='cv-container'>
          <a href={cv} target="_blank" rel="noreferrer" download='Bencs_Kevin_CV' ref={cvButton} onClick={handleCVButton}>
            CV
          </a>
        </div>
      </section>

      <nav className='github-linkedin-home-container'>
        <a rel='noreferrer' target='_blank' href='https://github.com/' className={props.githubLink} onClick={githubClick} ref={githubLink}>
          <img src={GithubLogo} alt='github link' className={props.github} />
        </a>
        <a rel='noreferrer' target='_blank' href='https://hu.linkedin.com/' className={props.linkedinLink} onClick={linkedinClick} ref={linkedinLink}>
          <img src={LinkedinLogo} alt='linkedin link' className={props.linkedin} />
        </a>
      </nav>

      
    </>
  )
}
