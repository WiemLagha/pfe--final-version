import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ContactsListService} from './../../services/contacts-list.service';
import { CampaignDataService } from './../../services/campaign-data.service';
import { core } from '@angular/compiler';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-ajouter-campagne',
  templateUrl: './ajouter-campagne.component.html',
  styleUrls: ['./ajouter-campagne.component.css']
})
export class AjouterCampagneComponent implements OnInit {

  newCampaignForm: FormGroup
  contactsLists = [];

  constructor(fb: FormBuilder,
    private router: Router,
    private contactsListService: ContactsListService,
    private dataService: CampaignDataService) {

    this.newCampaignForm = fb.group({

      campaignName: new FormControl('', [
        Validators.required
      ]),

      subject: new FormControl('', [
        Validators.required
      ]),

      name: new FormControl('', [
        Validators.required
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      listeContacts: new FormControl('',[])
    })
  }

    get campaignName() {
      return this.newCampaignForm.get('campaignName');
    }

    get subject() {
      return this.newCampaignForm.get('subject');
    }

    get email() {
      return this.newCampaignForm.get('email');
    }

    get name() {
      return this.newCampaignForm.get('name');
    }

    get listeContacts(){
      return this.newCampaignForm.get('listeContacts')
    }

    change(e) {
      this.listeContacts.setValue(e.target.value, {
        onlySelf: true
      })
    }


  


  ngOnInit(): void {

    this.contactsListService.getAllLists().subscribe(
      (result) => {
        this.contactsLists=result.contactsList;
        },
      (error) => {
        
      }
    )
  }


  transferData() {

    let data = this.newCampaignForm.value;
    console.log(data)
    this.dataService.setData(data);
    this.router.navigate(['/component/editor'])
    //let user = new User(null, data.firstname, data.lastname, data.email, data.phone, data.password);
  }

  
}
