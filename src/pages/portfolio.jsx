import {useRef} from 'react';
import {Link} from 'react-router-dom';

export default function Portfolio(props) {
  const languageButton = useRef(null);

  const handleLanguage = () => {
    if (props.language === 'HU'){
      props.setLanguage('EN');
    }
    else{
      props.setLanguage('HU');
    }
    languageButton.current.blur();
  };

  return (
    <>
      <article className='portfolio'>
        <h1>{props.portfolioText['h1']}</h1>
        <section>{props.portfolioText['section']}</section>
      </article>
      <nav>
        <Link to='/contact' className = {props.arrowRight}>
          <span></span>
        </Link>
        <Link to='/' className = {props.arrowLeft}>
          <span></span>
        </Link>
      </nav>

      <div className='language' onClick={handleLanguage}>
        <button ref={languageButton}>
          {props.language}
        </button>
      </div>
    </>
    
  )
}


