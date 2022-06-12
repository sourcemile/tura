class Event {
    constructor(type, name, data, time, impactData) {
        this.type = type; // What kind of event is this?
        this.name = name; // Name of the event.
        this.data = name; // Data relevant to describing the event.
        this.time = time; // What time did the event occur at?
        this.impactData = impactData; // How important was this event to various kinds of entitites?
                                    // This is significant because it determines who is going to remember it longer.
        
    }
    
    tryExecute() {

    }

    execute() {

    }
}