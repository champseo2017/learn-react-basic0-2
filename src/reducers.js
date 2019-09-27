import { combineReducers } from "redux";

function countAge(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const reducers = combineReducers({
  counter: countAge
});

export default reducers;
// store.subscribe(() => {
//   console.log("subscribe", store.getState());
// });
// console.log("befor dispatch", store.getState());

// store.dispatch({
//   type: "INCREMENT"
// });
