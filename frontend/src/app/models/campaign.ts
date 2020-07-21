export class Campaign {
    constructor (
        private _id?:string,
        private _campaignName?: string,
        private _subject?: string,
        private _name?: string,
        private _email?:string,
        private _listeContacts?: string,
        private _emailTemplate?: Object,
        private _dateEnvoi?: Date
         ){

    }

    get id(){
        return this._id;
    }
    set id(value:string){
        this._id=value;
    }

    get campaignName(){
        return this.campaignName;
    }
    set campaignName(value:string){
        this.campaignName=value;
    }

    get name(){
        return this.name;
    }
    set name(value:string){
        this.name=value;
    }

    get email(){
        return this.email;
    }
    set email(value:string){
        this.email=value;
    }

    get listeContacts(){
        return this.listeContacts;
    }
    set listeContacts(value:string){
        this.listeContacts=value;
    }

    get dateEnvoi(){
        return this._dateEnvoi;
    }
    set dateEnvoi(value:Date){
        this._dateEnvoi=value;
    }
    
}
