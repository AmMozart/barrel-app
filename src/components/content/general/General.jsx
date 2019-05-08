import React from "react";
import PowerMode from "./PowerMode";
import TempMode from "./TempMode";
import WaterFlow from './WaterFlow';

const General = props => {
  return (
    <div >
      <div>
        <PowerMode setPowerModeON={props.setPowerModeON}
          setPowerModeOFF={props.setPowerModeOFF}
          setPowerModeAUTO={props.setPowerModeAUTO}
          powerMode={props.powerMode} />
        <hr />
        <WaterFlow setWaterFlow={props.setWaterFlow}
          waterFlow={props.waterFlow}/>
        <hr />
        <TempMode setTempModeMANUAL={props.setTempModeMANUAL}
          setTempModeAUTO={props.setTempModeAUTO}
          tempMode={props.tempMode} />
      </div>
    </div>
  );
};

export default General;
