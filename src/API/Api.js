const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const uniID = 'dSKVmltDkblkGmmDltA2';

const appURL = `${baseURL}${uniID}/books/`;

const addBook = async (book) => {
  const bookData = {
    item_id: book.id,
    title: book.title,
    category: book.category,
  };

  const response = await fetch(appURL, {
    method: 'POST',
    body: JSON.stringify(bookData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
};

const removeBook = async (id) => {
  const response = await fetch(`${appURL}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
};

export { addBook, removeBook };
