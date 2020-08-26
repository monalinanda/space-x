import spacexdata from "../api/spacexdata";
import { FETCH_HISTORY, FETCH_ADDRESS } from "./types";

export const fetchSpacex = () => {
  return async (dispatch) => {
    const response = await spacexdata.get("/history");

    dispatch({ type: FETCH_HISTORY, payload: response.data });
  };
};

export const fetchAddress = () => {
  return async (dispatch) => {
    const response = await spacexdata.get("/payloads");
    dispatch({ type: FETCH_ADDRESS, payload: response.data });
  };
};
