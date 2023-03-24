import React from "react";
import style from "./TableTeng.module.css";
import Table from "./Table";

const TableTeng = (props) => {
  return (
    <div className={style.tengDayNight}>
      <Table
        className={style.day}
        name="День"
        setTeng={props.setDayTeng}
        tengChoised={props.tengChoisedDay}
      />

      <Table
        className={style.night}
        name="Ночь"
        setTeng={props.setNightTeng}
        tengChoised={props.tengChoisedNight}
      />
    </div>
  );
};

export default TableTeng;
