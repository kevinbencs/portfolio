import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from '../main/home';
import Portfolio from '../main/portfolio';
import Contact from '../main/contact';
import "./content.css";
import Header from '../header/header';
import Footer from '../footer/footer'



export default function Content() {
  const [isMenuActive, setMenuActive] = React.useState(false);
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = React.useState(location);
  const [page, setPage] = React.useState('');
  const [hamburgerMenu, setHamburgerMenu] = React.useState('hamburger-menu hamburger-menu-hov hamburger-menu-appearance');
  const [arrowRight, setArrowRight] = React.useState( location.pathname === '/' ? 'directionRight directionRightHome directionRightAppearance directionArrow' : 'directionRight directionRightPortfolio directionRightAppearance');
  const [arrowLeft, setArrowLeft] = React.useState( location.pathname === '/portfolio' ? 'directionLeft directionLeftPortfolio directionLeftAppearance directionArrow' : 'directionLeft directionLeftContact directionLeftAppearance');
  /*const [sceneClass, setSceneClass] = React.useState('scene-move-right scene-move');
  const [currentClass, setCurrentClass] = React.useState('current');
  const [mainClass, setMainClass] = React.useState('main');*/
  const [githubLink, setGithubLink] = React.useState('github-link github-link-appearance');
  const [github, setGithub] = React.useState('github');
  const [linkedinLink, setLinkedinLink] = React.useState('linkedin-link linkedin-link-appearance');
  const [linkedin, setLinkedin] = React.useState('linkedin');
  const [footerClass, setFooterClass] = React.useState('footer-visibility');
  const [aboutClass, setAboutClass] = React.useState('about about-visible');

  
  React.useEffect(() => {
    const clickRightArrow = () => {
      /*setSceneClass('scene-move-right scene-move');*/
      setAboutClass('about about-hidden');
      setFooterClass('footer-hidden');
      document.querySelector(".js-scene-move").classList.remove('scene-move-left');
      document.querySelector(".js-scene-move").classList.add('scene-move-right');
      setHamburgerMenu('hamburger-menu hamburger-menu-hov hamburger-menu-disappearance');
      setArrowRight('directionRight  directionRightDisappearance directionArrow');
      setArrowLeft('directionLeft  directionLeftDisappearance directionArrow');
      setGithubLink('github-link github-link-hidden')
      setLinkedinLink('linkedin-link linkedin-link-hidden')
      
      let id3 = setInterval(() => {
        document.querySelector(".js-current").classList.add('rotate-page');
        setGithub('github github-hidden');
        setGithubLink('github-link')
        setLinkedin('linkedin linkedin-hidden');
        setLinkedinLink('linkedin-link')

        /*setSceneClass('scene-move-right scene-move moveleft');
        setCurrentClass('current rotate-page');*/
        clearInterval(id3);
        document.querySelector(".js-scene-move").classList.add('moveleft');
        /*setMainClass('main App-page');*/
        document.querySelector(".js-main").classList.add('App-page');
        
        let id2 = setInterval(() => {
          setDisplayLocation(location);
          clearInterval(id2);
        },400);
        
        let id = setInterval(() => {
          
          setPage('');
          setGithubLink('github-link github-link-appearance');
          /*setGithub('github');
          setLinkedinLink('linkedin-link linkedin-link-appearance');*/
          setLinkedin('linkedin');
          setAboutClass('about about-visible');
          document.querySelector(".js-scene-move").classList.remove('moveleft');
          /*setSceneClass('scene-move-right scene-move');*/
          document.querySelector(".js-current").classList.remove('rotate-page');
          /*setCurrentClass('current');
          setMainClass('main');*/
          document.querySelector(".js-main").classList.remove('App-page');
          setHamburgerMenu('hamburger-menu hamburger-menu-hov hamburger-menu-appearance');
          setFooterClass('');
          setAboutClass('about about-visible');
          if (location.pathname === '/'){
            setArrowRight('directionRight directionRightHome directionRightAppearance');
          }
          else{
            setArrowRight('directionRight directionRightPortfolio directionRightAppearance');
          }
          if (location.pathname === '/portfolio'){
            setArrowLeft('directionLeft directionLeftPortfolio directionLeftAppearance');
          }
          else{
            setArrowLeft('directionLeft directionLeftContact directionLeftAppearance');
          }

          if(location.pathname === "/contact"){
            document.querySelector(".js-scene-move").classList.remove('scene-move-right');
            /*setSceneClass('scene-move-left scene-move')*/;
            document.querySelector(".js-scene-move").classList.add('scene-move-left');
          }

          clearInterval(id);
        },800)
      },1000);
    };


    const clickLeftArrow = () => {
      
      /*setSceneClass('scene-move scene-move-left');*/
      setAboutClass('about about-hidden');
      document.querySelector(".js-scene-move").classList.remove('scene-move-right');
      document.querySelector(".js-scene-move").classList.add('scene-move-left');
      setFooterClass('footer-hidden');
      setHamburgerMenu('hamburger-menu hamburger-menu-hov hamburger-menu-disappearance');
      setArrowRight('directionRight directionRightDisappearance');
      setArrowLeft('directionLeft  directionLeftDisappearance ');
      setGithub('github github-hidden');
      setLinkedin('linkedin linkedin-hidden');
      setGithubLink('github-link github-link-hidden')
      setLinkedinLink('linkedin-link linkedin-link-hidden')

      let id3= setInterval(() => {
        document.querySelector(".js-current").classList.add('rotate-page-right');
        /*setCurrentClass('current rotate-page-right');
        setSceneClass('scene-move scene-move-left moveleft');*/
        document.querySelector(".js-scene-move").classList.add('moveleft');
        document.querySelector(".js-main").classList.add('App-page');
        /*setMainClass('main App-page');*/
        
        let id2 = setInterval(() => {
          setDisplayLocation(location);
         clearInterval(id2);
        },400);
        
        let id = setInterval(() => {
          setPage('');
          /*setSceneClass('scene-move scene-move-left');*/
          document.querySelector(".js-scene-move").classList.remove('moveleft');
          document.querySelector(".js-current").classList.remove('rotate-page-right');
          /*setCurrentClass('current');*/
          document.querySelector(".js-main").classList.remove('App-page');
          /*setMainClass('main');*/
          setHamburgerMenu('hamburger-menu hamburger-menu-hov hamburger-menu-appearance');
          setFooterClass('');
          setAboutClass('about about-visible');
          if (location.pathname === '/'){
            setArrowRight('directionRight directionRightHome directionRightAppearance');
          }
          else{
            setArrowRight('directionRight directionRightPortfolio directionRightAppearance');
          }
          if (location.pathname === '/portfolio'){
            setArrowLeft('directionLeft directionLeftPortfolio directionLeftAppearance');
          }
          else{
            setArrowLeft('directionLeft directionLeftContact directionLeftAppearance');
          }

          if(location.pathname === "/"){
            /*setSceneClass('scene-move scene-move-right');*/
            document.querySelector(".js-scene-move").classList.remove('scene-move-left');
            document.querySelector(".js-scene-move").classList.add('scene-move-right');
            setGithubLink('github-link github-link-appearance');
            setGithub('github');
            setLinkedinLink('linkedin-link linkedin-link-appearance');
            setLinkedin('linkedin');
          }

          clearInterval(id);
        },800);
        clearInterval(id3);
      },1000);
    };



    if (location !==displayLocation) {
      if (isMenuActive) {
        let id = setInterval(() => {
          if (displayLocation.pathname === "/") {
            if (location.pathname === "/portfolio")
              setPage(<Portfolio/>);
            else setPage(<Contact/>);
            clickRightArrow();
          }
          else if (displayLocation.pathname === "/contact") {
            if (location.pathname === "/portfolio")
              setPage(<Portfolio/>);
            else setPage(<Home github = {github} linkedin = {linkedin} aboutClass = {aboutClass}/>);
            clickLeftArrow();
          }
          else {
            if (location.pathname === "/contact")
              {setPage(<Contact/>); clickRightArrow();}
            else {setPage(<Home github = {github} linkedin = {linkedin} aboutClass = {aboutClass}/>); clickLeftArrow();}
          }
          clearInterval(id);
          setMenuActive(false);
        },1500);
      }
      else{
        if (displayLocation.pathname === "/") {
          if (location.pathname === "/portfolio")
            setPage(<Portfolio/>);
          else setPage(<Contact/>);
          clickRightArrow();
        }
        else if (displayLocation.pathname === "/contact") {
          if (location.pathname === "/portfolio")
            setPage(<Portfolio/>);
          else setPage(<Home github = {github} linkedin = {linkedin} aboutClass = {aboutClass}/>);
          clickLeftArrow();
        }
        else {
          if (location.pathname === "/contact")
            {setPage(<Contact/>); clickRightArrow();}
          else {setPage(<Home github = {github} linkedin = {linkedin} aboutClass = {aboutClass}/>) ; clickLeftArrow();}
        }
      }
    }
  }, [location, displayLocation, isMenuActive, arrowRight]);



  return (
    <>
      <Header setMenuActive = {setMenuActive} isMenuActive = {isMenuActive} hamburgerMenu = {hamburgerMenu} setHamburgerMenu = {setHamburgerMenu}/>
        
      <main>
        <Routes location={displayLocation}>
          <Route path="/" element={
            <>
              <div className = 'scene'> 
                <div className = 'js-main main'/*{mainClass}*/>
                  <section className = 'js-current current'/*{currentClass}*/>
                    <Home aboutClass = {aboutClass} arrowRight = {arrowRight} githubLink = {githubLink} github = {github} linkedin = {linkedin} linkedinLink = {linkedinLink} />
                  </section>
                </div>
              </div>
              <div className = 'js-scene-move scene-move-right scene-move' /*{sceneClass}*/>
                <div className = 'main-move'>
                  <section className = 'loader'>{page}</section>
                </div>
              </div>
            </>
          }/>
          <Route path="/portfolio" element={
            <>
              <div className = 'scene'> 
                <div className = 'js-main main'/*{mainClass}*/>
                  <section className = 'js-current current'/*{currentClass}*/>
                    <Portfolio arrowRight = {arrowRight} arrowLeft = {arrowLeft}/>
                  </section>
                </div>
              </div>
              <div className = 'js-scene-move scene-move-right scene-move' /*{sceneClass}*/>
                <div className = 'main-move'>
                  <section className = 'loader'>{page}</section>
                </div>
              </div>
            </>
          }/>
          <Route path="/contact" element={
            <>
              <div className = 'scene'> 
                <div className = 'js-main main'/*{mainClass}*/>
                  <section className = 'js-current current'/*{currentClass}*/>
                    <Contact arrowLeft = {arrowLeft}/>
                  </section>
                </div>
              </div>
              <div className = 'js-scene-move scene-move-right scene-move'/*{sceneClass}*/>
                <div className = 'main-move'>
                  <section className = 'loader'>{page}</section>
                </div>
              </div>
            </>
          }/>
        </Routes>
      </main>
        
      <Footer footerClass = {footerClass}/>
    </>
  )
}
