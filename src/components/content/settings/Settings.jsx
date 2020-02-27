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
      
      <TableTeng setDayTeng={props.setDayTeng}/>
      
      <h2> Тариф </h2>
      <TablePrice />

   </div>
  );
}
);

export default Settings;
