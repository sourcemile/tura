class PlayerCharacter extends Mob {
    constructor(map, x, y, z, rotation, isSolid, name, level, description, resources, skills, maxHp, curHp, playerBio, ownerAccount) {
        super(map, x, y, z, rotation, isSolid, name, level, description, resources, skills, maxHp, curHp);
        
        this.playerBio = playerBio;
        this.ownerAccount = ownerAccount;
    }
    
    onLogIn() {

    }

    tryLogOut() {

    }
}