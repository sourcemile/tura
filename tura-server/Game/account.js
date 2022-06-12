
// 

class Account {
    constructor(_connection, _username) {
        this.online = false;
        this.connection = _connection;
        this.username = _username;
    }

    get getConnection () {
        return this.connection;
    }
    
    get getUsername () {
        return this.username;
    }

    set setOnline (bool) {
        this.online = bool;
    }
}