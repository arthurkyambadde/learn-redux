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

const initialState = { numberOfCakes: 10 };

//Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
