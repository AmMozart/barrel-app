import React from "react";
import style from "./Table.module.css";

const Table = (props) => {
  let addTeng = (ref, num) => {
    const teng = {
      value: ref.current.checked,
      name: num,
    };
    props.setTeng(teng);
  };
  const ref1 = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();
  const ref4 = React.createRef();
  const ref5 = React.createRef();
  const ref6 = React.createRef();
  return (
    <div className={style.teng}>
      <label className={style.Mode}>{props.name}</label>
      <label className={style.LineA}>Фаза А</label>
      <label className={style.LineB}>Фаза B</label>
      <label className={style.LineC}>Фаза C</label>
      <label className={style.teng1}>
        <input
          type="checkbox"
          checked={props.tengChoised[0]}
          ref={ref1}
          onChange={() => {
            addTeng(ref1, 1);
          }}
        />{" "}
        1 тэн
      </label>
      <label className={style.teng2}>
        <input
          type="checkbox"
          checked={props.tengChoised[1]}
          ref={ref2}
          onChange={() => {
            addTeng(ref2, 2);
          }}
        />{" "}
        2 тэн
      </label>
      <label className={style.teng3}>
        <input
          type="checkbox"
          checked={props.tengChoised[2]}
          ref={ref3}
          onChange={() => {
            addTeng(ref3, 3);
          }}
        />{" "}
        3 тэн
      </label>
      <label className={style.teng4}>
        <input
          type="checkbox"
          checked={props.tengChoised[3]}
          ref={ref4}
          onChange={() => {
            addTeng(ref4, 4);
          }}
        />{" "}
        4 тэн
      </label>
      <label className={style.teng5}>
        <input
          type="checkbox"
          checked={props.tengChoised[4]}
          ref={ref5}
          onChange={() => {
            addTeng(ref5, 5);
          }}
        />{" "}
        5 тэн
      </label>
      <label className={style.teng6}>
        <input
          type="checkbox"
          checked={props.tengChoised[5]}
          ref={ref6}
          onChange={() => {
            addTeng(ref6, 6);
          }}
        />{" "}
        6 тэн
      </label>
    </div>
  );
};

export default Table;
