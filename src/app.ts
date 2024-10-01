import { json } from "express";
import express, { Request, Response } from 'express';
import { getBookForId, getBooks, editBookForId } from './controllers/Books';
import { BookService } from "./services/Books";
import { Book } from "./models/Book";
const app = express();

app.use(json());

app.get("/books", (req: Request, res: Response) => {
    const books = getBooks();
    res.send(books)
});

app.get("/books/:id", (req: Request, res: Response) => {
    const searchId = req.params.id as string;
    const book = getBookForId(searchId);
    res.send(book)
});

app.post("/books", (req: Request, res: Response) => {
    const book  = new Book(req.body)
    const bookService = new BookService(book);
    const msg = bookService.execute();
    res.status(msg.statusCode).send(msg);  
});

app.patch("/books/:id", (req: Request, res: Response) => {
    const editId = req.params.id as string;
    editBookForId(editId, req.body);
});

app.listen(8080, () => {
    console.log("Server rodando na porta: 8080");
});