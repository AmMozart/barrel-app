import React from 'react';
import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (() => {
  return (
    <nav className='menu'>
      <div className={style.menuItem}>
        <NavLink exact to='/' activeClassName={style.active}>Главная</NavLink>
        <NavLink to='/timer' activeClassName={style.active}>Таймер</NavLink>
        <NavLink to='/price' activeClassName={style.active}>Тариф</NavLink>
        <NavLink to='/settings' activeClassName={style.active}>Настройки</NavLink>
        <NavLink to='/service' activeClassName={style.active}>Сервис</NavLink>
        <NavLink to='/reset' activeClassName={style.active}>Сброс</NavLink>
      </div>
    </nav>
  );
}
);

export default Menu;
