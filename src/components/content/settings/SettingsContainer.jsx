import { connect } from "react-redux";
import Settings from "./Settings";
import {SET_TENG_MODE, SET_DAY_TENG, SET_NIGHT_TENG} from  "../../../reducers/barrel";

let mapStateToProps = (state) => {
  return {
    tengMode: state.barrel.tengMode,
    tengChoisedDay: state.barrel.tengChoisedDay,
    tengChoisedNight: state.barrel.tengChoisedNight
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setTengModeMANUAL: () => 
      dispatch({ type: SET_TENG_MODE, data: "MANUAL" }),
    setTengModeOFF: () => 
      dispatch({ type: SET_TENG_MODE, data: "OFF" }),
    setTengModeAUTO: () => 
      dispatch({ type: SET_TENG_MODE, data: "AUTO" }),
    setDayTeng: (data) => 
      dispatch({ type: SET_DAY_TENG, data: data }),
    setNightTeng: (data) => 
      dispatch({ type: SET_NIGHT_TENG, data: data })
  }
}

let SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsContainer;