import { useState, useRef } from 'react';
import Menu from './menu';
import './hamburgermenu.css';

export default function Header(props) {
  const hamburgerMenu = useRef(null);
  const languageButton = useRef(null);
  const [menuListClass, setMenuListClass] = useState();
  const [menuItemAboutClass, setMenuItemAboutClass] = useState();
  const [menuItemPortfolioClass, setMenuItemPortfolioClass] = useState();
  const [menuItemContactClass, setMenuItemContactClass] = useState();
  const [isHamburgerMenuClick, setHamburgerMenuClick] = useState(true);
  const [isMenuItemActive, setMenuItemActive] = useState(false);

  const menuItemHidden = () => {
    setMenuListClass();
    setMenuItemAboutClass('menu-item-about');
    setMenuItemPortfolioClass('menu-item-portfolio');
    setMenuItemContactClass('menu-item-contact');

    setTimeout(() => {
      setMenuItemActive(false);
    }, 1000);

  };

  const menuItemShow = () => {
    setMenuItemActive(true);
    setTimeout(() => {
      setMenuListClass('menu-list-visible');
      setMenuItemAboutClass('menu-item-about menu-item-visible');
      setMenuItemPortfolioClass('menu-item-portfolio menu-item-visible');
      setMenuItemContactClass('menu-item-contact menu-item-visible');
    }, 10);
  };


  const hamburgerMenuInactive = () => {
    props.setHamburgerMenu('hamburger-menu-rot');
    setTimeout(() => {
      props.setHamburgerMenu('hamburger-menu-hov');
    }, 600);
  }


  const hamburgerMenuActive = () => {
    props.setHamburgerMenu('hamburger-menu-rot');
    setTimeout(() => {
      props.setHamburgerMenu('hamburger-menu-rot hamburger-menu-rot-two');
    }, 400);
  };



  const menuAnimanition = () => {
    if (isHamburgerMenuClick) {
      setHamburgerMenuClick(false);
      if (props.isMenuActive === true) {
        hamburgerMenuInactive();
        menuItemHidden();
        props.setMenuActive(() => false);
      }
      else {
        hamburgerMenuActive();
        menuItemShow();
        props.setMenuActive(() => true);
      }
      hamburgerMenu.current.blur();
      setTimeout(() => {
        setHamburgerMenuClick(true);
      }, 1200);
    }
  };

  const menuKeyboard = (e) => {
    if (e.keyCode === 13) {
      menuAnimanition();
    }
  };

  const menuClassList = {
    menuItemHidden,
    hamburgerMenuInactive,
    menuListClass,
    menuItemAboutClass,
    menuItemContactClass,
    menuItemPortfolioClass,
    setMenuActive: props.setMenuActive
  };

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
    <header>
      <label className='hamburger-menu-label' onClick={menuAnimanition} tabIndex="0" ref={hamburgerMenu} onKeyDown={menuKeyboard}>
        <span className={`${props.hamburgerMenu}  hamburger-menu`} ></span>
      </label>
      <div className={`language ${props.languageHide}`} onClick={handleLanguage}>
        <button ref={languageButton}>
          {props.language}
        </button>
      </div>
      {isMenuItemActive && <Menu  {...menuClassList} />}
    </header>
  )
}
