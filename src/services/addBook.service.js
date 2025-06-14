import books from '../model/model.js';

export const addBookService = (payload) => {
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
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    };
  }

  if (readPage > pageCount) {
    return {
      error: true,
      statusCode: 400,
      message:'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    };
  }


  const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  return {
    error: false,
    statusCode: 201,
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  };
};
