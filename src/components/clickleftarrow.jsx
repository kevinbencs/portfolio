const ClickLeftArrow = (props) => {
  props.setSceneClass('scene-move-left');
  props.setAboutClass('about-hidden');
  props.setFooterClass('footer-hidden');
  props.setHamburgerMenu(' hamburger-menu-disappearance');
  props.setArrowRight('directionRight directionRightDisappearance');
  props.setArrowLeft('directionLeft  directionLeftDisappearance ');
  props.setGithub('github github-hidden');
  props.setLinkedin('linkedin linkedin-hidden');
  props.setGithubLink('github-link github-link-hidden')
  props.setLinkedinLink('linkedin-link linkedin-link-hidden')
  props.setLanguageHide('language-hide');

  setTimeout(() => {
    props.setCurrentClass('rotate-page-right');
    props.setSceneClass('scene-move-left moveleft');
    props.setMainClass('App-page');

    setTimeout(() => {
      props.setDisplayLocation(props.location);
    }, 400);

    setTimeout(() => {
      props.setPage('');
      props.setSceneClass('scene-move-left');
      props.setCurrentClass('');
      props.setMainClass('');
      props.setHamburgerMenu('hamburger-menu-hov hamburger-menu-appearance');
      props.setLanguageHide('language-show');
      props.setFooterClass('');


      if (props.location.pathname === "/") {
        props.setSceneClass('scene-move-right');
        props.setGithubLink('github-link github-link-appearance');
        props.setGithub('github');
        props.setLinkedinLink('linkedin-link linkedin-link-appearance');
        props.setLinkedin('linkedin');
        props.setAboutClass('about-visible');
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
    }, 600);
  }, 100);
};

export default ClickLeftArrow;