import React from 'react';
import style from './TableTeng.module.css';

const TableTeng = ((props) => {

  return (
      <div className={style.tengDayNight}>
        <label className={style.dayMode}>Дневной Режим</label>
        <label className={style.dayLineA}>Фаза А</label>
        <label className={style.dayLineB}>Фаза B</label>
        <label className={style.dayLineC}>Фаза C</label>
        <label className={style.tengDay1}><input type='checkbox' onChange={props.setDayTeng}></input>1 тэн</label>
        <label className={style.tengDay2}><input type='checkbox'></input>2 тэн</label>
        <label className={style.tengDay3}><input type='checkbox'></input>3 тэн</label>
        <label className={style.tengDay4}><input type='checkbox'></input>4 тэн</label>
        <label className={style.tengDay5}><input type='checkbox'></input>5 тэн</label>
        <label className={style.tengDay6}><input type='checkbox'></input>6 тэн</label>
        <label className={style.nightMode}>Ночной Режим</label>
        <label className={style.nightLineA}>Фаза А</label>
        <label className={style.nightLineB}>Фаза B</label>
        <label className={style.nightLineC}>Фаза C</label>
        <label className={style.tengNight1}><input type='checkbox'></input>1 тэн</label>
        <label className={style.tengNight2}><input type='checkbox'></input>2 тэн</label>
        <label className={style.tengNight3}><input type='checkbox'></input>3 тэн</label>
        <label className={style.tengNight4}><input type='checkbox'></input>4 тэн</label>
        <label className={style.tengNight5}><input type='checkbox'></input>5 тэн</label>
        <label className={style.tengNight6}><input type='checkbox'></input>6 тэн</label>
      </div>
  );
}
);

export default TableTeng;
