/*
    Scrinkly ~ Simple MMORPG Server

        You may use this project for free in either commercial or personal projects.
        But please visibly credit me somewhere or I'll crumple up into a wet piece of paper :(
        
    Author:     Emil Eriksson
    Github:     https://github.com/sourcemile/
    License:    MIT Standard

    © sourcemile

*/

class NetworkHandler {

    constructor() {
        // init code here    
    }

    onData(jsonData) {

        var type = jsonData.type;
        var cmd = jsonData.cmd;
        var subCmd = jsonData.subCmd;

        switch (type) {
            case 'AUTH':
                switch (cmd) {
                    case 'LOG_IN':
                        break;
                    case 'LOG_OUT':
                        break;
                    case 'CHANGE_PASSWORD':
                        break;
                    case 'UPDATE_EMAIL':
                        break;
                }
                break;
                // Player commands.
            case 'PLAYER':
                super.gameServer.
                break;
        }
    }
}