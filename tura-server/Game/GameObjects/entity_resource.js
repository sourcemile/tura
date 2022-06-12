
// Mana, Rage, Energy, etc.
// This class is used by mobs and players.
class EntityResource {
    constructor(name, maxVal, curVal) {
        this.exhausted = false;
        this.name = name;
        this.maxVal = maxVal;
        this.curVal = curVal;
    }

    get getCurrent() {
        return this.curVal;
    }

    set setCurrent(value) {
        this.curVal = value;
    }

    get getMax() {
        return this.maxVal;
    }

    set setMax(value) {
        this.maxVal = value;
    }

    tryDeplete(amount) {
        if ((this.curVal - amount) <= 0) {
            this.curVal = 0;
            this.exhausted = true;
        } else {
            this.deplete(amount);
        }
    }

    deplete(amount) {
        curVal -= amount;
    }

    setMax() {
        this.curVal = this.maxVal;
    }

}