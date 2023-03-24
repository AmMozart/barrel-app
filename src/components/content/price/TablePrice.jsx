import React from "react";
import style from "./TablePrice.module.css";

const TablePrice = (props) => {
  return (
    <div className={style.energyPrice}>
      <div className={style.choise}>Выбрать</div>
      <div className={style.timeCol}>Время</div>
      <div className={style.priceCol}>Цена руб.</div>

      <div className={style.checkbox1}>
        <input type="checkbox"></input>
      </div>
      <div className={style.time1}>
        <input type="text" />
        &nbsp; - &nbsp;
        <input type="text" />
      </div>
      <div className={style.price1}>
        <input type="text" />
      </div>

      <div className={style.checkbox2}>
        <input type="checkbox"></input>
      </div>
      <div className={style.time2}>
        <input type="text" />
        &nbsp; - &nbsp;
        <input type="text" />
      </div>
      <div className={style.price2}>
        <input type="text" />
      </div>

      <div className={style.checkbox3}>
        <input type="checkbox"></input>
      </div>
      <div className={style.time3}>
        <input type="text" />
        &nbsp; - &nbsp;
        <input type="text" />
      </div>
      <div className={style.price3}>
        <input type="text" />
      </div>

      <div className={style.checkbox4}>
        <input type="checkbox"></input>
      </div>
      <div className={style.time4}>
        <input type="text" />
        &nbsp; - &nbsp;
        <input type="text" />
      </div>
      <div className={style.price4}>
        <input type="text" />
      </div>
    </div>
  );
};

export default TablePrice;
