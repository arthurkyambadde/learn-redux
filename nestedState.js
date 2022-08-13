const redux = require("redux");

const initialState = {
  name: "Arthur",
  address: {
    street: "123 main st",
    city: kampala,
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updated_street = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  }
};
