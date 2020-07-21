import { Injectable } from '@angular/core';
import {ListeContactsComponent} from './../component/liste-contacts/liste-contacts.component';
import {ContactsList} from './../models/contacts-list';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactsListService {

  addListUrl = "http://localhost:3000/contacts/addContactsList";
  getAllUrl= "http://localhost:3000/contacts/contactsList";
  deleteListUrl= "http://localhost:3000/contacts/deleteList";
  getListUrl= "http://localhost:3000/contacts/getList";

  constructor(private http:HttpClient) { }

  addContactsList(list:ContactsList){
    let dataFromWs= this.http.post <any> (this.addListUrl,list);
    return dataFromWs;
  
  }
  
  getAllLists(){
    return this.http.get<any> (this.getAllUrl);
  }

  delete(idList){
    return this.http.delete<any> (this.deleteListUrl+"/"+idList);
  }

}


