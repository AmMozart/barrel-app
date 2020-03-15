import { connect } from 'react-redux';
import { SET_POWER_MODE, SET_TEMP_MODE, SET_WATER_FLOW, SET_DAY_TENG, SET_NIGHT_TENG}
  from '../../../reducers/barrel';
import General from './General';


let mapStateToProps = (state) => {
  return {
    powerMode: state.barrel.powerMode,
    tempMode: state.barrel.tempMode,
    waterFlow: state.barrel.waterFlow,
    // pressureSystem: state.barrel.pressureSystem,
    // pressureBarrel: state.barrel.pressureBarrel,
    // waterLevel: state.barrel.waterLevel,
    // currentWaterFlow: state.barrel.currentWaterFlow
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setPowerModeON: () =>
      dispatch({ type: SET_POWER_MODE, data: "ON" }),
    setPowerModeOFF: () =>
      dispatch({ type: SET_POWER_MODE, data: "OFF" }),
    setPowerModeAUTO: () =>
      dispatch({ type: SET_POWER_MODE, data: "AUTO" }),
    setTempModeMANUAL: () =>
      dispatch({ type: SET_TEMP_MODE, data: "MANUAL" }),
    setTempModeAUTO: () =>
      dispatch({ type: SET_TEMP_MODE, data: "AUTO" }),
    setWaterFlow: (data) =>
      dispatch({ type: SET_WATER_FLOW, data: data }),
    setDayTeng: (tengNumber, value) =>
      dispatch({ type: SET_DAY_TENG, data: {tengNumber, value} }),
    setNightTeng: (tengNumber, value) =>
      dispatch({ type: SET_NIGHT_TENG, data: {tengNumber, value} })
  }
}

let GeneralContainer = connect(mapStateToProps, mapDispatchToProps)(General);

export default GeneralContainer;