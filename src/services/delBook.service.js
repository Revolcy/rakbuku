export const deleteBookByIdService = (bookId) => {
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return {
      error: true,
      statusCode: 404,
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    };
  }

  books.splice(bookIndex, 1);

  return {
    error: false,
    message: 'Buku berhasil dihapus',
  };
};
