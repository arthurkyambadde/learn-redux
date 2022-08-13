const redux = require("redux");
const { default: logger } = require("redux-logger");
const combineReducers = redux.combineReducers;
const createStore = redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;

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

const initialCakeState = { numberOfCakes: 10 };
const initialIceCreamState = { numberOfIceCreams: 20 };

//Reducer

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
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

const cakeReducer = (state = initialCakeState, action) => {
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

    default:
      return state;
  }
};

//combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});

//Redux store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(5);

actions.orderIcecream(1);
actions.orderIcecream(1);
actions.orderIcecream(1);

actions.restockIceCream(6);

unsubscribe();
