
// A simple chat or dialogue message containing sender name, message text and type of message in case we want something extra to happen.
class Message {
    constructor(sender, messageString, type) {
        this.sender = sender;
        this.messageString = messageString;
        this.command = command; // do something special to the entity that receives the message.
    }

    get getMessageString() {
        return this.messageString;
    }

    get getSender() {
        return this.sender;
    }
}