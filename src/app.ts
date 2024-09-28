import { json } from "express";
import express from 'express';
import fs from 'fs';
import {Livro} from "./models/Books";
import { getBooks } from './controllers/Books';
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
    const books = getBooks();
    const book = new Livro(req.body);
    fs.writeFileSync("src/json/books.json", JSON.stringify({books}));
    res.send({"message": "Suceful!"});
});

app.listen(8080, () => {
    console.log("Server rodando na porta: 8080");
});