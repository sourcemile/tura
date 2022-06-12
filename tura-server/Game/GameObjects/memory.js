// The memory of a mob. What things does it remember? Who does it hate? Who does it like?

class Memory {
    constructor(listEvents) {
        this.eventList = []
        init();
    }

    init() {
        // initiate memory here.
    }

    // Add one more event to memory.
    addEvent(event) {
        this.eventList.push(event);
    }
}