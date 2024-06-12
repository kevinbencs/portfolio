import { useEffect, useRef, useState } from 'react';
import './page.css';
import GithubLogo from '../images/github-mark-white.png';
import LinkedinLogo from '../images/linkedin.png';
import Portrait from '../images/portrait.jpg';
import cv from '../cv/Bencs_Kevin_CV.pdf';
import hu from '../language/hu.json';
import eng from '../language/eng.json';
import { v4 as uuidv4 } from 'uuid';
import Makespan from '../components/makespan';


const showText = (setH1Text, setName, setPText, language, setH1Line, setPline, setPlineClass) => {

  let TextArray = '';
  let h1Text = '';
  let name = 'Bencs Kevin.';
  let pText = '';
  if (language === 'HU') {
    h1Text = hu.home.h1;
    pText = hu.home.about;
  }
  else {
    h1Text = eng.home.h1;
    pText = eng.home.about;
    name = 'Kevin Bencs.';
  }

  for (let i = 0; i < h1Text.length; i++) {
    setTimeout(() => {
      TextArray += h1Text[i];
      setH1Text(TextArray.split(''));
    }, 50 * i);
  }

  setTimeout(() => {
    TextArray = '';
    for (let i = 0; i < name.length; i++) {
      setTimeout(() => {
        TextArray += name[i];
        setName(TextArray.split(''));
      }, 50 * i);
    }
  }, 50 * h1Text.length)

  setTimeout(() => {
    setH1Line('');
    setPline('|');
    TextArray = '';
    for (let i = 0; i < pText.length; i++) {
      setTimeout(() => {
        TextArray += pText[i];
        setPText(TextArray.split(''));
      }, 50 * i);
    }
  }, 53 * (h1Text.length + name.length))

  setTimeout(() => {
    setPlineClass('about-cursor');
  }, 53 * (h1Text.length + name.length + pText.length))

};


export default function Home(props) {

  const cvButton = useRef(null);
  const githubLink = useRef(null);
  const linkedinLink = useRef(null);
  const [h1text, setH1Text] = useState([]);
  const [Name, setName] = useState([]);
  const [pText, setPText] = useState([]);
  const [h1Line, setH1Line] = useState('|');
  const [pLine, setPline] = useState('');
  const [pLineClass, setPlineClass] = useState('');

  const handleCVButton = () => {
    cvButton.current.blur();
  }

  const githubClick = () => {
    githubLink.current.blur();
  };

  const linkedinClick = () => {
    linkedinLink.current.blur();
  };

  useEffect(() => {
    setH1Line('|');
    setPline('');
    setPlineClass('');
    setH1Text([]);
    setName([]);
    setPText([]);
    setTimeout(() => {
      showText(setH1Text, setName, setPText, props.language, setH1Line, setPline, setPlineClass);
    }, 900);
  }, [props.language]);

  useEffect(() => {
    setInterval(() => {

    }, 500);
  }, []);


  return (
    <>
      <section className={`about ${props.aboutClass}`}>
        <img src={Portrait} alt='Portrait' className='portrait' />
        <h1>
          <span>{h1text.map(r => <Makespan text={r} key={uuidv4()} />)}</span> <strong className='name'>{Name.map(r => <Makespan text={r} key={uuidv4()} />)}</strong>{h1Line}
        </h1>
        <p>
          {pText.map(r => <Makespan text={r} key={uuidv4()} />)}<span className={pLineClass}>{pLine}</span>
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
        <a rel='noreferrer' target='_blank' href='https://linkedin.com/in/kevin-bencs-3a3883311' className={props.linkedinLink} onClick={linkedinClick} ref={linkedinLink}>
          <img src={LinkedinLogo} alt='linkedin link' className={props.linkedin} />
        </a>
      </nav>


    </>
  )
}
