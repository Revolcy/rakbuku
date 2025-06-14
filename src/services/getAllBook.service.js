import books from '../../models/model.js';

export const getAllBookService = (query) => {
  let filteredBooks = books;


  if (query.name) {
    const nameQuery = query.name.toLowerCase();
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(nameQuery)
    );
  }


  if (query.reading !== undefined) {
    const isReading = query.reading === '1';
    filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
  }


  if (query.finished !== undefined) {
    const isFinished = query.finished === '1';
    filteredBooks = filteredBooks.filter((book) => book.finished === isFinished);
  }


  const booksResult = filteredBooks.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  return {
    error: false,
    data: {
      books: booksResult,
    },
  };
};
