import React from 'react';
import style from './Settings.module.css';
import ChangeButton from '../../СhangeButton';
import TableTeng from './TableTeng';
import TablePrice from './TablePrice';

const Settings = ((props) => {
  return (
    <div className = {style.general}>
      <h2 className={style.name}> Режим Работы Тэнов </h2>
      <ChangeButton text='Ручной' onClick= {props.setTengModeMANUAL} isActive={props.tengMode === 'MANUAL'}/>
      <ChangeButton text='Выключен' onClick= {props.setTengModeOFF} isActive={props.tengMode === 'OFF'}/>
      <ChangeButton text='Авто' onClick= {props.setTengModeAUTO} isActive={props.tengMode === 'AUTO'}/>

      <h2> Активные тены </h2>
      <TableTeng setDayTeng={props.setDayTeng} 
      setNightTeng={props.setNightTeng} 
      tengChoisedDay={props.tengChoisedDay}
      tengChoisedNight={props.tengChoisedNight}/>
      
      <h2> Тариф </h2>
      <TablePrice />
   </div>
  );
}
);

export default Settings;
