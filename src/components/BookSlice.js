const PULL_BOOKS = 'BookStore/bookSlice/PULL_BOOKS';
const PULL_SUCCESS = 'BookStore/bookSlice/PULL_SUCCESS';
const PULL_FAIL = 'BookStore/bookSlice/PULL_FAIL';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const uniID = 'dSKVmltDkblkGmmDltA2';
const appURL = `${baseURL}${uniID}/books/`;

const pullBooks = () => async (dispatch) => {
  dispatch({ type: PULL_BOOKS });
  const response = await fetch(appURL);
  const books = await response.json();
  return dispatch({ type: PULL_SUCCESS, books });
};

export {
  pullBooks as default,
  PULL_BOOKS,
  PULL_SUCCESS,
  PULL_FAIL,
};
