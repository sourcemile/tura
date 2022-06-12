
// A MessageBox could be thought of as a personal bulletin board belonging to any person where entities can leave messages.
// However, the way it differs in design is that it could belong to a map, a player (personal dms), etc.
// NPC dialogue will be done by them passing dialogue messages into the player's message boxes.
// They could also talk to each other since they will have their own message boxes.

class MessageBox {
    constructor() {
        this.messageList = [];
        this.init();
    }

    init() {
        // init logic here
    }

    addMessage() {
        this.messageList.push(new Message())
    }
}