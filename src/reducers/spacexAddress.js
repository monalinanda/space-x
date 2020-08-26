//import _ from "lodash";
import { FETCH_ADDRESS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADDRESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
