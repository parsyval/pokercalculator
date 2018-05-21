import { SELECT_CARD } from './store-actions';

const initialState = {
  selectedCard: null,
  selectedCards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selectedCard: action.payload };
    default:
      return state;
  }
};

export default reducer;
