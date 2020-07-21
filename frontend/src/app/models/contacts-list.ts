export class ContactsList {
    constructor (
        private _id?:string,
        private _name?: string,
        private _contacts?: Array<string>,
        private _dateAjout?: Date
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

    get contacts(){
        return this._contacts;
    }
    set contacts(value:Array<string>){
        this._contacts=Object.assign([],value)
    }

    get dateAjout(){
        return this._dateAjout;
    }
    set password(value:Date){
        this._dateAjout=value;
    }

}
