import { Livro } from '../models/Books'
import { saveBook } from '../controllers/Books';
import { Message } from '../models/Messages';

export class BookService {
    private livro: Livro;

    constructor(livro: Livro) {
        this.livro = livro;
    }

    execute(): Message {
        try {
            this.validateAttributes();
            saveBook(this.livro);
            return new Message("Booked Saved!");
        } catch(e) {
            return new Message("Booked failed to save!");
        }
    }

    private validateAttributes() {
        if(!this.livro.title) throw new TypeError("Titulo necessário para o envio!");
    }
}