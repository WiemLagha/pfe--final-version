import { Component, OnInit, ViewChild } from '@angular/core';
import {ContactsList} from './../../models/contacts-list'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {ContactsListService} from './../../services/contacts-list.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import {ToastService} from './../toast/toast.service';
import {ConfirmationDialogService} from './../../services/confirmation-dialog.service';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {

  contactsLists = []
  newListForm: FormGroup;
  csvRecords: any[] = [];
  header = false;

  constructor(public fb:FormBuilder,
    public contactsListService: ContactsListService,
    private ngxCsvParser: NgxCsvParser,
    private toast: ToastService,
    private confirmationDialogService:ConfirmationDialogService) { 
      this.newListForm = fb.group({

        name: new FormControl('', [
          Validators.required
        ])
      })
    }

    get name() {
      return this.newListForm.get('name');
    }

    @ViewChild('fileImportInput', { static: false }) fileImportInput: any;
 
  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {
 
    // Select the files from the event
    const files = $event.srcElement.files;
 
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
 
        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
 
  }

  addList() {

    let data = this.newListForm.value;
    let list = new ContactsList(null, data.name, this.csvRecords[0], new Date());

    this.contactsListService.addContactsList(list).subscribe(
      (result) => {
        //this.contactsLists.push(list)
        this.getAllLists()

        this.toast.show('Liste de contacts ajoutée avec succès!', { classname: 'bg-success text-light', delay: 5000 });
      },
      (error) => {
        this.toast.show("Nom déjà utilisé", { classname: 'bg-danger text-light', delay: 5000 });
        console.log(error);
      }

    )
  }

  getAllLists(){
    this.contactsListService.getAllLists().subscribe(
      (result) => {
        this.contactsLists=result.contactsList;
        },
      (error) => {
        
      }
    )
  }

  deleteList(id:String,indice:number){
    this.confirmationDialogService.confirm('Confirmer', 'Voulez vous vraiment supprimer la liste?')
    .then ((confirmed) => {
    console.log(id);
    this.contactsListService.delete(id).subscribe(
      (result) => {
        this.contactsLists.splice(indice,1)
        this.toast.show('Liste de contacts supprimée avec succès!', { classname: 'bg-success text-light', delay: 5000 });
        },
      (error) => {
        this.toast.show("Une erreur s'est produit! Veuillez réessayer", { classname: 'bg-danger text-light', delay: 5000 });

    })
  })
  .catch(() => console.log('User dismissed the dialog'));
 
  }

  
    ngOnInit(): void {
      this.getAllLists();
  }

}
