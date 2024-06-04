import React from 'react';
import {NavLink} from 'react-router-dom';
import './menuitem.css';
import hu from '../../language/hu.json';
import eng from '../../language/eng.json';



export default function Menu(props) {

  const menuItem = () => {
    props.hamburgerMenuInactive();
    props.menuItemHidden();
  }


  return (
    <nav className = {`${props.menuListClass} menu-list`}>
        <NavLink onClick = {menuItem} to = '/'  className = {`${props.menuItemAboutClass} menu-item`}><span> {props.language === 'HU' ? `${hu.menu.about}` : `${eng.menu.about}`} </span></NavLink>
        <NavLink onClick = {menuItem} to = '/portfolio' className = {`${props.menuItemPortfolioClass} menu-item`}><span>{props.language === 'HU' ? `${hu.menu.portfolio}` : `${eng.menu.portfolio}`}</span></NavLink>
        <NavLink onClick = {menuItem} to = '/contact' className = {`${props.menuItemContactClass} menu-item`}><span> {props.language === 'HU' ? `${hu.menu.contact}` : `${eng.menu.contact}`}</span></NavLink>
    </nav>
  )
}
