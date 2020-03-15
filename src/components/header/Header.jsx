import React from 'react';
import style from './Header.module.css';
import logo from './logo.png';
import menuIcon from './menu-icon.png';

const Status = ((props) => {
  return (
    <header className={style.header}>
      <h1>Отопительный котёл</h1>
      <img className={style.logo} src={logo} alt='Логотип' />
      <div className={style.status}>
        <span>Давление в системе: <span>{props.pressureSystem}</span> bar</span>
        <span>Давление в бочке: <span>{props.pressureBarrel}</span> bar</span>
        <span>Уровень воды: <span>{props.waterLevel}</span> л.</span>
        <span>Поток: <span>{props.currentWaterFlow}</span> л./ч.</span>
      </div>
    </header>
  );
}
);

export default Status;