import { nanoid } from 'nanoid';
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
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
      code: 400,
    };
  }

  if (readPage > pageCount) {
    return {
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      code: 400,
    };
  }

  const id = nanoid(16);
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
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
    code: 201,
  };
};
