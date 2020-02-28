import React from 'react';
import style from './TableTimer.module.css';
import ChangeButton from "../../СhangeButton";

const TableTimer = ((props) => {
  return (
      <div className={style.energyPrice}>
        <div className={style.choise}>Режим</div>
        <div className={style.timeCol}>Время</div>

        <div className={style.checkbox1}>
          <ChangeButton text='Вкл' />
          <ChangeButton text='Выкл' />
        </div>
        <div className={style.time1}>
          <input type='text' />
        </div>

        <div className={style.checkbox2}>
          <ChangeButton text='Вкл' />
          <ChangeButton text='Выкл' />
        </div>
        <div className={style.time2}>
          <input type='text' />
        </div>

        <div className={style.checkbox3}>
          <ChangeButton text='Вкл' />
          <ChangeButton text='Выкл' />
        </div>
        <div className={style.time3}>
          <input type='text' />
        </div>

        <div className={style.checkbox4}>
          <ChangeButton text='Вкл' />
          <ChangeButton text='Выкл' />
        </div>
        <div className={style.time4}>
          <input type='text' />
        </div>
      </div>
  );
});

export default TableTimer;
