import React from "react";
import style from './WaterFlow.module.css';

const WaterFlow = props => {
  let range = React.createRef();
  let change = () => {
    // console.log(range.current.value);
    props.setWaterFlow(range.current.value);
  }
  return (
    <div className={style.general}>
      <h2>Расход Теплоносителя</h2>
      <span>0</span>
      <input className={style.slider} onChange={change} ref={range} type='range' min='0' max='1000' step='50' value={props.waterFlow} />
      <span>1000  Литр\час</span> 
      <h3>Уставка: <span>{props.waterFlow}</span> Литр\час</h3>
    </div>
      );
    };
    
    export default WaterFlow;
