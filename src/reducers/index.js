import { combineReducers } from "redux";
import spacexReducer from "./spacexReducer";
import spacexAddress from "./spacexAddress";

export default combineReducers({
  spacex: spacexReducer,
  spacexAddress: spacexAddress,
});
