const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const STORAGE_KEY = 'applicationId';

const post = (endpoint, body = {}, method = 'POST') => fetch(`${BASE_URL}${endpoint}`, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const createApp = async () => {
  let applicationId = localStorage.getItem(STORAGE_KEY);

  if (!applicationId) {
    const response = await post('/apps');

    applicationId = await response.text();
    localStorage.setItem(STORAGE_KEY, applicationId);
  }
};

export const createBook = async (book) => {
  const applicationId = localStorage.getItem(STORAGE_KEY);
  const response = await post(`/apps/${applicationId}/books`, book);

  return response.status === 201;
};

export const getBooks = async () => {
  const applicationId = localStorage.getItem(STORAGE_KEY);
  const response = await fetch(`${BASE_URL}/apps/${applicationId}/books`);

  return response.json();
};

export const deleteBook = async (id) => {
  const applicationId = localStorage.getItem(STORAGE_KEY);
  const response = await post(
    `/apps/${applicationId}/books/${id}`,
    {
      item_id: id,
    },
    'DELETE',
  );

  const result = await response.text();

  return result === 'The book was deleted successfully!';
};
