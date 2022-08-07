const redux = require("redux");
const createStore = redux.legacy_createStore;

//Action
const CAKE_ORDERED = "CAKE_ORDERED";

//Action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

//State

const initialState = { numberOfCakes: 10, anotherProperty: 5 };

//Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //this prevents mutation of other properties(spread operator)
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

//Redux store
const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
store.dispatch(orderCake());
