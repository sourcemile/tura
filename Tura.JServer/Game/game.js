var settings = require('globals');

class Game {

    constructor() {
        // TODO: Allow for multiple world instances.
        this.world = new World();
        this.logger = new MessageBox();
        this.init();
    }

    init() {

        //Add a new world instance for each world that exists in our settings.
        globals.WORLDS.forEach(world => {
            this.worlds.push(world);
        });
    }

    getPlayerFromSocket(websocket) {
        this.onlinePlayers.forEach(player => {
            if (player.websocket == websocket) {
                return player;
            } else {
                return undefined;
            }
        });
    }

    getSocketFromPlayerName(playerName) {
        
    }

    // "Stop! I will look at your request first!"
    // This method is any outside object's gateway to affect things happening in the game world.
    playerRequestHandler(playername, fn) {

        try {
            if (type(fn) == str) {
                // OK
            } else {
                // fn was not a string.
                return false;
            }
        } catch {
            //
            return false;
        }

        if ()

        // OK!
        return true;
    }
    
}