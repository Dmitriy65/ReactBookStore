const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
