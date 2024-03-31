import {useState, useEffect, useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import "./content.css";
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import ClickRightArrow from './clickrightarrow';
import ClickLeftArrow from './clickleftarrow';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import NotFound from '../pages/notfound';



export default function Content() {

  const location = useLocation();
  const [isMenuActive, setMenuActive] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState('hamburger-menu-hov hamburger-menu-appearance');

  const [displayLocation, setDisplayLocation] = useState(location);
  const [page, setPage] = useState('');
  
  const [arrowRight, setArrowRight] = useState( 
    location.pathname === '/' ? 'directionRight directionRightHome directionRightAppearance ' : 
    'directionRight directionRightPortfolio directionRightAppearance');
  const [arrowLeft, setArrowLeft] = useState(
    location.pathname === '/portfolio' ? 'directionLeft directionLeftPortfolio directionLeftAppearance ' : 
    'directionLeft directionLeftContact directionLeftAppearance'
    );
    
  const [sceneClass, setSceneClass] = useState('');
  const [currentClass, setCurrentClass] = useState('');
  const [mainClass, setMainClass] = useState('');
  

  const [homeText, setHomeText] = useState({
    'h1': 'Hello, az én nevem ',
   'about': 'Egy full-stack webfejlesztő vagyok.'
  });
  const [portfolioText, setPortfolioText] = useState({
    'h1': 'Webfejlesztő portfolió', 'section':
   'Képességeim: HTML, CSS, Javascript, React, Node.JS'
  });
  const [contactText, setContactText] = useState({
    'h1':'Kapcsolat', 
    'h2': 'Egyéb elérhetőség', 
    'p': 'Ha fel szeretnéd venni velem a kapcsolatot, töltsd ki az űrlapot vagy küldj egy email-t a kevinbencs8@gmail.com címre.',
    'button': 'Beküld'
  });


  const [githubLink, setGithubLink] = useState('github-link github-link-appearance');
  const [github, setGithub] = useState('github');
  const [linkedinLink, setLinkedinLink] = useState('linkedin-link linkedin-link-appearance');
  const [linkedin, setLinkedin] = useState('linkedin');
  const [footerClass, setFooterClass] = useState('footer-visibility');
  const [aboutClass, setAboutClass] = useState('about about-visible');
  const [isPageChange, setPageChange] = useState(false);

  
  const arrowNeed = {
    location,
    setAboutClass,
    setFooterClass,
    setArrowLeft,
    setArrowRight,
    setGithubLink,
    setLinkedinLink,
    setDisplayLocation,
    setPage,
    setHamburgerMenu,
    setGithub,
    setLinkedin,
    setPageChange,
    setSceneClass,
    setCurrentClass,
    setMainClass
  };


  const menu = {
    isMenuActive,
    setMenuActive,
    hamburgerMenu,
    setHamburgerMenu
  };

  const mainNeed = {
    location,
    displayLocation,
    aboutClass,
    arrowLeft,
    arrowRight,
    github,
    githubLink,
    linkedin,
    linkedinLink,
    page,
    isPageChange,
    mainClass,
    currentClass,
    sceneClass,
    homeText,
    setHomeText,
    contactText,
    setContactText,
    portfolioText,
    setPortfolioText
  };

  const siteAnimation = useCallback( () =>{

    if (displayLocation.pathname === "/") {
      if (location.pathname === "/portfolio")
        setPage(<Portfolio portfolioText={portfolioText}/>);
      else if (location.pathname === "/contact") setPage(<Contact contactText = {contactText}/>);
      else setPage(<NotFound/>);
      ClickRightArrow(arrowNeed);
    }
    else if (displayLocation.pathname === "/contact") {
      if (location.pathname === "/portfolio")
        setPage(<Portfolio portfolioText={portfolioText} />);
      else if (location.pathname === "/") setPage(<Home github = {github} linkedin = {linkedin} aboutClass = {aboutClass} homeText = {homeText} />);
      else setPage(<NotFound/>);
      ClickLeftArrow(arrowNeed);
    }
    else if (displayLocation.pathname === "/portfolio"){
      if (location.pathname === "/contact")
        {setPage(<Contact contactText = {contactText}/>); ClickRightArrow(arrowNeed);}
      else if (location.pathname === "/") {setPage(<Home github = {github} linkedin = {linkedin} aboutClass = {aboutClass} homeText = {homeText}/>) ; ClickLeftArrow(arrowNeed);}
      else {setPage(<NotFound/>); ClickLeftArrow(arrowNeed);}
    }
    else{
      if (location.pathname === "/contact") {
        setPage(<Contact contactText = {contactText}/>);
      }
      else if (location.pathname === "/") {
        setPage(<Home github = {github} linkedin = {linkedin} aboutClass = {aboutClass} homeText = {homeText}/>);
      }
      else if (location.pathname === "/portfolio") {
        setPage(<Portfolio portfolioText={portfolioText}/>);
      }
      else {
        setPage(<NotFound/>);
      }
      ClickLeftArrow(arrowNeed);
    }
  }, [displayLocation, aboutClass, github, linkedin, arrowNeed, location.pathname]);



  useEffect(() => {
    if (location !==displayLocation) {
      setPageChange(true);
      setTimeout(() => {
        if (isMenuActive) {
          setTimeout(() => {
            siteAnimation();
            setMenuActive(false);
          },1500);
        }
        else{
          
          siteAnimation();
        }
      },10);
      
    }
  }, [location, displayLocation, isMenuActive, arrowRight, arrowLeft]);



  return (
    <>
      <Header menu = {menu}/>
      <Main {...mainNeed}/>
      <Footer footerClass = {footerClass}/>
    </>
  )
}
