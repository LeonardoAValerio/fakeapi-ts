interface MessageAttributes {
    message: string
}


export class Message implements MessageAttributes {
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}