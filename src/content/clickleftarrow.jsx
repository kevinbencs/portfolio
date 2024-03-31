const ClickLeftArrow = (props) => {
  props.setSceneClass('scene-move-left');
  props.setAboutClass('about about-hidden');
  props.setFooterClass('footer-hidden');
  props.setHamburgerMenu(' hamburger-menu-disappearance');
  props.setArrowRight('directionRight directionRightDisappearance');
  props.setArrowLeft('directionLeft  directionLeftDisappearance ');
  props.setGithub('github github-hidden');
  props.setLinkedin('linkedin linkedin-hidden');
  props.setGithubLink('github-link github-link-hidden')
  props.setLinkedinLink('linkedin-link linkedin-link-hidden')

  setTimeout(() => {
    props.setCurrentClass('rotate-page-right');
    props.setSceneClass('scene-move-left moveleft');
    props.setMainClass('App-page');
    
    setTimeout(() => {
      props.setDisplayLocation(props.location);
    },400);
    
    setTimeout(() => {
      props.setPage('');
      props.setSceneClass('scene-move-left');
      props.setCurrentClass('');
      props.setMainClass('');
      props.setHamburgerMenu('hamburger-menu-hov hamburger-menu-appearance');
      props.setFooterClass('');
      props.setAboutClass('about about-visible');
      if (props.location.pathname === '/'){
        props.setArrowRight('directionRight directionRightHome directionRightAppearance');
      }
      else{
        props.setArrowRight('directionRight directionRightPortfolio directionRightAppearance');
      }
      if (props.location.pathname === '/portfolio'){
        props.setArrowLeft('directionLeft directionLeftPortfolio directionLeftAppearance');
      }
      else{
        props.setArrowLeft('directionLeft directionLeftContact directionLeftAppearance');
      }

      if(props.location.pathname === "/"){
        props.setSceneClass('scene-move-right');
        props.setGithubLink('github-link github-link-appearance');
        props.setGithub('github');
        props.setLinkedinLink('linkedin-link linkedin-link-appearance');
        props.setLinkedin('linkedin');
      }
      setTimeout(() => {
        props.setPageChange(false);
      }, 1000);
      

    },800);
  },1000);
};

export default ClickLeftArrow;