import { addBookService } from '../services/addBook.service.js';
import { deleteBookByIdService } from '../services/delBook.service.js';
import { getAllBookService } from '../services/getAllBook.service.js';
import { getBookById } from '../services/getById.service.js';
import { updateBookByIdService } from '../services/updateBook.service.js';

export const create = (request, h) => {
  const result = addBookService(request.payload);

  if (result.error) {
    return h
      .response({
        status: 'fail',
        message: result.message,
      })
      .code(result.statusCode);
  }

  return h
    .response({
      status: 'success',
      message: 'Book successfully added',
      data: result.data,
    })
    .code(201);
};

export const getAll = (request, h) => {
  const result = getAllBookService(request.query);

  return h
    .response({
      status: 'success',
      data: result.data,
    })
    .code(200);
};

export const findById = (request, h) => {
  const { bookId } = request.params;
  const result = getBookById(bookId);

  if (result.error) {
    return h
      .response({
        status: 'fail',
        message: result.message,
      })
      .code(result.statusCode);
  }

  return h
    .response({
      status: 'success',
      data: result.data,
    })
    .code(200);
};

export const updateById = (request, h) => {
  const { bookId } = request.params;
  const result = updateBookByIdService(bookId, request.payload);

  if (result.error) {
    return h
      .response({
        status: 'fail',
        message: result.message,
      })
      .code(result.statusCode);
  }

  return h
    .response({
      status: 'success',
      message: result.message,
    })
    .code(200);
};

export const removeById = (request, h) => {
  const { bookId } = request.params;
  const result = deleteBookByIdService(bookId);

  if (result.error) {
    return h
      .response({
        status: 'fail',
        message: result.message,
      })
      .code(result.statusCode);
  }

  return h
    .response({
      status: 'success',
      message: result.message,
    })
    .code(200);
};