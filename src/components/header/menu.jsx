import React from 'react';
import {NavLink} from 'react-router-dom';
import './menuitem.css';



export default function Menu(props) {

  const menuItem = () => {
    props.hamburgerMenuInactive();
    props.menuItemHidden();
  }


  return (
    <nav className = {`${props.menuListClass} menu-list`}>
        <NavLink onClick = {menuItem} to = '/'  className = {`${props.menuItemAboutClass} menu-item`}><span>about</span></NavLink>
        <NavLink onClick = {menuItem} to = '/portfolio' className = {`${props.menuItemPortfolioClass} menu-item`}><span>portfolio</span></NavLink>
        <NavLink onClick = {menuItem} to = '/contact' className = {`${props.menuItemContactClass} menu-item`}><span>contact</span></NavLink>
    </nav>
  )
}
