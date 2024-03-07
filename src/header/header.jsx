import React from 'react';
import Menu from './menu';
import './hamburgermenu.css';

export default function Header(props) {

  const [menuListClass, setMenuListClass] = React.useState('menu-list')
  const [menuItemAboutClass, setMenuItemAboutClass] = React.useState()
  const [menuItemPortfolioClass, setMenuItemPortfolioClass] = React.useState()
  const [menuItemContactClass, setMenuItemContactClass] = React.useState()

  const menuItemHidden = () => {
    setMenuListClass('menu-list');
    setMenuItemAboutClass('menu-item menu-item-about');
    setMenuItemPortfolioClass('menu-item menu-item-portfolio');
    setMenuItemContactClass('menu-item menu-item-contact');
  };

  const menuItemShow = () => {
    setMenuListClass('menu-list menu-list-visible');
    setMenuItemAboutClass('menu-item menu-item-about menu-item-visible');
    setMenuItemPortfolioClass('menu-item menu-item-portfolio menu-item-visible');
    setMenuItemContactClass('menu-item menu-item-contact menu-item-visible');
  };


  const hamburgerMenuInactive = () => {
    props.setHamburgerMenu('hamburger-menu hamburger-menu-appearance hamburger-menu-rot');
    document.querySelector(".hamburger-menu").style.transform = `rotate(180deg)`;

    let id = setInterval(() => {
      document.querySelector('.hamburger-menu').style.transform = `rotate(0deg)`;
      props.setHamburgerMenu('hamburger-menu hamburger-menu-appearance hamburger-menu-hov');
      clearInterval(id);
    },600);
  }


  const hamburgerMenuActive = () => {
    document.querySelector('.hamburger-menu').style.transform = `rotate(180deg)`;
    props.setHamburgerMenu('hamburger-menu hamburger-menu-appearance hamburger-menu-rot');
    
    let id = setInterval(() => {
      document.querySelector(".hamburger-menu").style.transform = `rotate(45deg)`;
      props.setHamburgerMenu('hamburger-menu hamburger-menu-appearance hamburger-menu-rot hamburger-menu-rot-two');
      clearInterval(id);
    },400);

    let id2= setInterval(() => {
      document.querySelector(".hamburger-menu").style.transform = `rotate(60deg)`;
      clearInterval(id2);
    },800);
  };



  const menuAnimanition = () => {
    if (props.isMenuActive === true){
      hamburgerMenuInactive();
      menuItemHidden();
      props.setMenuActive(() => false);
    }
    else {
      hamburgerMenuActive();
      menuItemShow();
      props.setMenuActive(() => true);
    }
  };

  return (
    <header>
        <label className='hamburger-menu-label' onClick={menuAnimanition}>
          <span className= {props.hamburgerMenu} ></span>
        </label>
        <Menu  menuItemHidden = {menuItemHidden} hamburgerMenuInactive = {hamburgerMenuInactive} menuListClass = {menuListClass} menuItemAboutClass = {menuItemAboutClass} menuItemContactClass = {menuItemContactClass} menuItemPortfolioClass = {menuItemPortfolioClass}/>
    </header>
  )
}
