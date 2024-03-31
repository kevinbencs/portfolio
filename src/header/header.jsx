import {useState, useRef} from 'react';
import Menu from './menu';
import './hamburgermenu.css';

export default function Header(props) {
  const hamburgerMenu = useRef(null);

  const [menuListClass, setMenuListClass] = useState();
  const [menuItemAboutClass, setMenuItemAboutClass] = useState();
  const [menuItemPortfolioClass, setMenuItemPortfolioClass] = useState();
  const [menuItemContactClass, setMenuItemContactClass] = useState();

  const [isMenuItemActive, setMenuItemActive] = useState(false);

  const menuItemHidden = () => {
    setMenuListClass();
    setMenuItemAboutClass('menu-item-about');
    setMenuItemPortfolioClass('menu-item-portfolio');
    setMenuItemContactClass('menu-item-contact');
    
    setTimeout(() => {
      setMenuItemActive(false);
    },1000);
    
  };

  const menuItemShow = () => {

    setMenuItemActive(true);
    setTimeout(() => {
      setMenuListClass('menu-list-visible');
      setMenuItemAboutClass('menu-item-about menu-item-visible');
      setMenuItemPortfolioClass('menu-item-portfolio menu-item-visible');
      setMenuItemContactClass('menu-item-contact menu-item-visible');
    },10);
    
  };


  const hamburgerMenuInactive = () => {
    props.menu.setHamburgerMenu('hamburger-menu-rot');

    setTimeout(() => {
      props.menu.setHamburgerMenu('hamburger-menu-hov');
    },600);
  }


  const hamburgerMenuActive = () => {
    props.menu.setHamburgerMenu('hamburger-menu-rot');
    
    setTimeout(() => {
      props.menu.setHamburgerMenu('hamburger-menu-rot hamburger-menu-rot-two');
    },400);
  };



  const menuAnimanition = () => {
    if (props.menu.isMenuActive === true){
      hamburgerMenuInactive();
      menuItemHidden();
      props.menu.setMenuActive(() => false);
    }
    else {
      hamburgerMenuActive();
      menuItemShow();
      props.menu.setMenuActive(() => true);
    }
    hamburgerMenu.current.blur();
  };

  const menuKeyboard = (e) => {
    if (e.keyCode === 13){
      menuAnimanition();
    }
  };

  const menuClassList = {
    menuItemHidden, 
    hamburgerMenuInactive,
    menuListClass,
    menuItemAboutClass,
    menuItemContactClass,
    menuItemPortfolioClass
  };

  return (
    <header>
      <label className='hamburger-menu-label' onClick={menuAnimanition} tabIndex="0" ref={hamburgerMenu} onKeyDown={menuKeyboard}>
        <span className= {`${props.menu.hamburgerMenu}  hamburger-menu`} ></span>
      </label>
      {isMenuItemActive && <Menu  {...menuClassList}/>}
    </header>
  )
}
