import React from 'react';
 import style from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = (() => {
  return (
    <nav className = 'menu'>
    <div className = {style.menuItem}>
      <p><NavLink to = '/general' activeClassName = {style.active}>ОБЩЕЕ</NavLink></p>
      <p><NavLink to = '/info' activeClassName = {style.active}>ИНФОРМАЦИЯ</NavLink></p>
      <p><NavLink to = '/settings' activeClassName = {style.active}>НАСТРОЙКИ</NavLink></p>
      <p><NavLink to = '/service' activeClassName = {style.active}>СЕРВИС</NavLink></p>
      <p><NavLink to = '/reset' activeClassName = {style.active}>СБРОС</NavLink></p>
    </div>
    </nav>
  );
}
);

export default Menu;
