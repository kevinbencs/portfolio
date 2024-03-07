import React from 'react';
import {NavLink} from 'react-router-dom';
import './menuitem.css';



export default function Menu(props) {

  const menuItem = () => {
    props.hamburgerMenuInactive();
    props.menuItemHidden();
  }


  return (
    <nav className = {props.menuListClass}>
        <NavLink onClick = {menuItem} to = '/'  className = {props.menuItemAboutClass}><span>about</span></NavLink>
        <NavLink onClick = {menuItem} to = '/portfolio' className = {props.menuItemPortfolioClass}><span>portfolio</span></NavLink>
        <NavLink onClick = {menuItem} to = '/contact' className = {props.menuItemContactClass}><span>contact</span></NavLink>
    </nav>
  )
}
