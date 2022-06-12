// Server settings

const GAME_NAME = 'phantasio';
const GAME_VERSION = 1;

// How many world servers can we have and what are their names?
const WORLDS = [
    "World",
    "Dev World"
];

// What is the player client allowed to try and ask of the game server?
const PLAYER_COMMANDS = {
    "move": { Number, Number },         // (direction, speed)
    "trade": { String, String },        // (entityType, name)
    "msgMap": { String },               // (text)
    "msgAll": { String },               // (text)
    "msgPlayer": { String, String },    // (playerName, text)
    "useAbility": { String },           // (abilityId)
    "useItem": { String }               // (itemId)
};

// Special effects that affect the receiver when receiving dialogue.
const DIALOGUE_EFFECTS = {
    "tryInsult": { String, Number},     // (insultType, effectiveness)
    "tryCharm": { String, Number },     // (charmType, effectiveness)
    "frustrate": { Number },            // (effectiveness)
    "deafen": { Number },               // (effectiveness)
    "scare": { String, Number },        // (scareType, effectiveness)
};