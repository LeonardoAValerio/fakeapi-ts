import fs from 'fs';
import { Book } from '../models/Book';

export function getBooks(): Book[] {
    const dbString = fs.readFileSync("src/json/books.json", { encoding: "utf-8" });
    const db = JSON.parse(dbString);
    return db.books;
}

export function getBookForId(id: string): Book | {} {
    const dbString = fs.readFileSync("src/json/books.json", { encoding: "utf-8" });
    const db = JSON.parse(dbString) as {books: Book[]};
    return db.books.filter(book => book.id === id) ?? {};
}

export function saveBook(book: Book) {
    const books = getBooks();
    books.push(book);
    fs.writeFileSync("src/json/books.json", JSON.stringify({books}));
}

export function editBookForId(id: string, editedAttibrutes: {}) {
    return "legal!";
}