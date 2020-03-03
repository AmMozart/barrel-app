import React from 'react';
 import style from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = (() => {
  return (
    <nav className = 'menu'>
    <div className = {style.menuItem}>
      <p><NavLink to = '/info' activeClassName = {style.active}>ИНФОРМАЦИЯ</NavLink></p>
      <p><NavLink exact to = '/' activeClassName = {style.active}>Главная</NavLink></p>
      <p><NavLink to = '/timer' activeClassName = {style.active}>Таймер</NavLink></p>
      <p><NavLink to = '/price' activeClassName = {style.active}>Тариф</NavLink></p>
      <p><NavLink to = '/settings' activeClassName = {style.active}>Настройки</NavLink></p>
      <p><NavLink to = '/service' activeClassName = {style.active}>Сервис</NavLink></p>
      <p><NavLink to = '/reset' activeClassName = {style.active}>Сброс</NavLink></p>
    </div>
    </nav>
  );
}
);

export default Menu;
