import books from '../../models/model.js';

export const getBookById = (bookId) => {
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return {
      error: true,
      statusCode: 404,
      message: 'Buku tidak ditemukan',
    };
  }

  return {
    error: false,
    data: {
      book,
    },
  };
};
