class Mob extends Entity {
    constructor(map, x, y, z, rotation, isSolid, name, level, description, resources, skills, maxHp, curHp) {
        super(map, x, y, z, rotation, isSolid, name, level, description, resources);
        this.messageBox = new MessageBox();
        this.skills = []; // This should be a list of Skill objects.
        this.maxHp = maxHp;
        this.curHp = curHp;
    }

    hasHealth() {
        if (this.curHp > 0) {
            return true;
        } else {
            return false;
        }
    }

    tryTrade(entity) {
        this.Trade(entity);
        return true;
    }

    

    trade(entity) {
        
    }



}