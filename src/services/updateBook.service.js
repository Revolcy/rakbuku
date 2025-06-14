import books from '../model/model.js';

export const updateBookByIdService = (bookId, payload) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = payload;

  if (!name) {
    return {
      error: true,
      statusCode: 400,
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    };
  }

  if (readPage > pageCount) {
    return {
      error: true,
      statusCode: 400,
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    };
  }

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return {
      error: true,
      statusCode: 404,
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    };
  }

  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  books[bookIndex] = {
    ...books[bookIndex],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    updatedAt,
  };

  return {
    error: false,
    status: 'success',
    message: 'Buku berhasil diperbarui',
    statusCode: 200,
  };
};
