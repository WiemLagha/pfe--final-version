export class User {
    constructor (
        private _id?:string,
        private _name?: string,
        private _login?: string,
        private _password?: string,
        private _role?: string,
        private _dernierModif?: Date
         ){

    }

    get id(){
        return this._id;
    }
    set id(value:string){
        this._id=value;
    }


    get name(){
        return this._name;
    }
    set name(value:string){
        this._name=value;
    }

    get login(){
        return this._login;
    }
    set login(value:string){
        this._login=value;
    }

    get password(){
        return this._password;
    }
    set password(value:string){
        this._password=value;
    }

    get role(){
        return this._role;
    }

    set role(value:string){
        this._role=value;
    }

    get dernierModif(){
        return this._dernierModif;
    }

    set dernierModif(value: Date){
        this._dernierModif= value;
    }

    

}
