/*
    FanturaServer ~ Simple MMORPG Server

        You may use this project for free in either commercial or personal projects.
        But please visibly credit me somewhere or I'll crumple up into a wet piece of paper :(

    Author:     Emil Eriksson
    Github:     https://github.com/sourcemile/
    License:    MIT Standard
    
    © sourcemile

*/

var ws = require('ws');
var server = new ws.Server({port: 9603});
var network_handler = new NetworkHandler();
var game = new Game();

server.on('connection', server =>  {
    server.on('message', message => {
        network_handler.onData(message);
    });
    
    server.on('close'), (code, reason) => {
        network_handler.onClosed();
        console.log('Connection closed' + (code, reason));
    }

    server.on('error'), errorType => {
        network_handler.onError(errorType);
    }
});
