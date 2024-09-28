interface LivroAttributes {
    title: string
}

export class Livro implements LivroAttributes {
    title: string;

    constructor(atributtes: LivroAttributes) {
        this.title = atributtes.title;
    }
}