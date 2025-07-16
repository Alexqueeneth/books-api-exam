import { Router } from "express";
import { getServerHealthStatus, sayHello } from "../app.controller.js";
import { getBooks, getBookById, createBook, updateBook, deleteBook } from "./books.service.js";

 export const router = Router();
 
router.get("/hello", sayHello);
router.get("/health", getServerHealthStatus);
router.get("/book", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);


