import { connect } from "react-redux";
import Service from "./Service";

let mapStateToProps = (state) => {
  return {
    ccc: state.barrel.tengMode,
  };
};

let ServiceContainer = connect(mapStateToProps)(Service);

export default ServiceContainer;
