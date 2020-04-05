const defaultState = {
  contacts: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH":
      return { contacts: action.payload };

    default:
      return state;
  }
};
