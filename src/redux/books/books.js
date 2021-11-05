const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOK:
      return [...state.concat(action.payload)];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload.item_id)];
    default:
      return state;
  }
};

export default reducer;
