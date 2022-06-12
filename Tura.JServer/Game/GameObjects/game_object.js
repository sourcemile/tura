
// Base class for any physical object inside the game world.
class GameObject {
    constructor(map, x, y, z, rotation, isSolid) {
        // A physical object must have a position.'
        this.isSolid = isSolid;
        this.isVisible = true;
        this.map = map;
        this.x = x
        this.y = y;
        this.z = z;
        
    }

    set setX(x) {
        this.x = x;
    }

    set setY(y) {
        this.y = y;
    }

    set setVisible(bool) {
        this.isVisible = bool;
    }
}