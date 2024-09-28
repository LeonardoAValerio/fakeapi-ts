import { json } from "express";
import express from 'express';
import { getBooks } from './controllers/Books';
import { BookService } from "./services/Books";
import { Livro } from "./models/Books";
const app = express();

interface BookProps {
    title: string
}

app.use(json());

app.get("/books", (req, res) => {
    const books = getBooks();
    res.send(books)
});

app.post("/books", (req, res) => {
    const livro  = new Livro(req.body)
    const bookService = new BookService(livro);
    const msg = bookService.execute();
    res.send(msg);  
});

app.listen(8080, () => {
    console.log("Server rodando na porta: 8080");
});