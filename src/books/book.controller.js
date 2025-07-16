import * as bookService from "../books/book.service.js";
import { sendResponse, catchAsync } from "../common/utils.common.js";

export const getAllBooks = catchAsync(async (req, res) => {
  const books = await bookService.getAllBooks();
  sendResponse(res, 200, true, "Books fetched successfully", books); // Wrong status code
});

export const getBookById = catchAsync (async (req, res) => {
  const { id } = req.params;
  const book = bookService.getBookById(id);
  sendResponse(res, 200, true, "Book fetched successfully", book);
});

export const createBook = catchAsync(async (req, res) => {
  // Missing async/await for service
  const book = await bookService.createBook(req.body);
  sendResponse(res, 201, true, "Book created successfully", book); // Wrong status code
});

export const updateBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  // No error handling if book not found
  const book = bookService.updateBook(id, req.body);
  sendResponse(res, 200, true, "Book updated successfully", book);
});

export const deleteBook = catchAsynch(async (req, res) => {
  const { id } = req.params;
   await bookService.deleteBook(id); // No error handling
  sendResponse(res, 200, true, "Book deleted successfully", null); // Wrong status code
});





