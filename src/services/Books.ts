import { Livro } from '../models/Books'

export class BookService {
    livro: Livro;

    constructor(livro: Livro) {
        this.livro = livro;
    }

    validateAttributes(): boolean {
        if(!this.livro.title) return false;
        return true;
    }
}