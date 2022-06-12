class Entity extends GameObject {
    constructor(map, x, y, z, rotation, isSolid, name, level, description, resources) {
        super(map, x, y, z, rotation, isSolid);
        this.alive = true;
        this.name = name;
        this.description = description;
        this.resources = resources // This should be a list of EntityResource objects.
        this.init();
    }

    get getName() {
        return this.name;
    }

    init() {
        if (this.hasHealth == false) {
            // spawned with less than 0 health, so die.
            this.die();
        }
    }

    onSpawn() {
        // spawn logic here.
    }


    tryMoveRoute(x, y) {
        this.tryMoveRoute();
    }

    moveRoute(x, y) {
        // augh
    }

    move(dir, speed) {

    }





}