import LoginJSON from "./../Data/Login.json";
import UserJSON from "./../Data/UserDetails.json";

export const fetchAuth = () => async dispatch => {
  const response = await LoginJSON;
  // console.log(response);
  dispatch({ type: "FETCH_AUTH", payload: response });
};

export const fetchUsers = () => async dispatch => {
  const response = await UserJSON;
  // console.log(response);
  dispatch({ type: "FETCH_USERS", payload: response.user });
};

export const setStatus = value => dispatch => {
  dispatch({ type: "SET_STATUS", payload: value });
};
