const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: '1',
    category: 'Electronics',
    title: 'Capacitors',
    author: 'Jaddix Mugabo',
    progress: {
      currentChapter: 'Chapter 22',
      completed: '64',
    },
  },
  {
    id: '2',
    category: 'Artificial Intelligence',
    title: 'Deep Learning',
    author: 'Julien Bahati',
    progress: {
      currentChapter: 'Chapter 5',
      completed: '8',
    },
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          ...action.payload,
          author: 'Author not set',
          progress: {
            currentChapter: 'Introduction',
            completed: '0',
          },
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
