import React from 'react';
import style from './Status.module.css';
import logo from './logo.png';

const Status = ((props) => {
  return (
    <header className={style.status}>
      <img className='logo' src={logo} alt='Логотип'/>
      <h1>Отопительный котёл</h1>
      <div>
        <h4>Давление в системе: <span>{props.pressureSystem}</span> bar</h4>
        <h4>Давление в бочке: <span>{props.pressureBarrel}</span> bar</h4>
        <h4>Уровень воды: <span>{props.waterLevel}</span> л.</h4>
        <h4>Поток: <span>{props.currentWaterFlow}</span> л./ч.</h4>
      </div>
    </header>
  );
}
);

export default Status;