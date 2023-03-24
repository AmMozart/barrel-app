import { connect } from "react-redux";
import Status from "./Header";

let mapStateToProps = (state) => {
  return {
    pressureSystem: state.barrel.pressureSystem,
    pressureBarrel: state.barrel.pressureBarrel,
    waterLevel: state.barrel.waterLevel,
    currentWaterFlow: state.barrel.currentWaterFlow,
  };
};

let StatusContainer = connect(mapStateToProps)(Status);

export default StatusContainer;
