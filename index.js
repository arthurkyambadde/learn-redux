const redux = require("redux");
const createStore = redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators;

//Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ORDER_ICECREAM = "ORDER_ICECREAM";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

//Action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ORDER_ICECREAM,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: RESTOCK_ICECREAM,
    payload: qty,
  };
}

//State

const initialState = { numberOfCakes: 10, numberOfIceCreams: 20 };

//Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //this prevents mutation of other properties(spread operator)
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    case ORDER_ICECREAM:
      return {
        ...state, //this prevents mutation of other properties(spread operator)
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
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

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(3));

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(5);

unsubscribe();
