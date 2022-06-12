//Describes an entire map. Could be an overworld, a dungeon, a player map, etc.
//A map consists of a grid of zones, zones consist of grids of tiles.

class Map {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    init() {
        //initialization logic here.
    }
}