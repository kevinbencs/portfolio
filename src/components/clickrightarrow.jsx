const ClickRightArrow = (props) => {
  props.setSceneClass('scene-move-right');
  props.setAboutClass('about-hidden');
  props.setFooterClass('footer-hidden');
  props.setHamburgerMenu(' hamburger-menu-disappearance');
  props.setArrowRight('directionRight  directionRightDisappearance ');
  props.setArrowLeft('directionLeft  directionLeftDisappearance');
  props.setGithubLink('github-link github-link-hidden');
  props.setLinkedinLink('linkedin-link linkedin-link-hidden');
  props.setLanguageHide('language-hide');

  setTimeout(() => {
    props.setGithub('github github-hidden');
    props.setLinkedin('linkedin linkedin-hidden');
    props.setSceneClass('moveleft');
    props.setCurrentClass('rotate-page');
    props.setMainClass('App-page');
    setTimeout(() => {
      props.setDisplayLocation(props.location);
    }, 400);

    setTimeout(() => {

      props.setPage('');
      props.setSceneClass('scene-move-right ');
      props.setCurrentClass('');
      props.setMainClass('');
      props.setHamburgerMenu('hamburger-menu-hov hamburger-menu-appearance');
      props.setLanguageHide('language-show');
      props.setFooterClass('');


      if (props.location.pathname === "/contact") {
        props.setSceneClass('scene-move-left');
      }

      props.setPageChange(false);
      if (props.location.pathname === '/') {
        props.setArrowRight('directionRight directionRightHome directionRightAppearance');
      }
      else {
        props.setArrowRight('directionRight directionRightPortfolio directionRightAppearance');
      }
      if (props.location.pathname === '/portfolio') {
        props.setArrowLeft('directionLeft directionLeftPortfolio directionLeftAppearance');
      }
      else {
        props.setArrowLeft('directionLeft directionLeftContact directionLeftAppearance');
      }
    }, 800)
  }, 1000);
};


export default ClickRightArrow;