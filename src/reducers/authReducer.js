export default (state = { status: false }, action) => {
  switch (action.type) {
    case "FETCH_AUTH":
      return action.payload;
    case "SET_STATUS":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
