import fs from 'fs';
import { Livro } from '../models/Books';

export function getBooks() {
    const dbString = fs.readFileSync("src/json/books.json", { encoding: "utf-8" });
    const db = JSON.parse(dbString);
    return db.books;
}

export function saveBook(book: Livro) {
    const books = getBooks();
    fs.writeFileSync("src/json/books.json", JSON.stringify({books}));
}