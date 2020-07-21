import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ContactsListService} from './../../services/contacts-list.service';
import { CampaignDataService} from './../../services/campaign-data.service';
import { ConfirmationDialogService} from './../../services/confirmation-dialog.service';
import { ToastService} from './../toast/toast.service';
@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent implements OnInit {
  campagneList = [];

  
  constructor(private contactsListservice:ContactsListService,
    private campaignService: CampaignDataService,
    private confirmationDialogService: ConfirmationDialogService,
    private contactsListService: ContactsListService,
    private campaignDataService: CampaignDataService,
    private toast: ToastService) { }

  
  ngOnInit(): void {
    this.campaignService.getCampaigns().subscribe(
      (result)=>{
        this.campagneList=result.campaignsList;

      },
      (error)=>{

      }
    )

  }

  delete(id,indice){
    this.confirmationDialogService.confirm('Confirmer', 'Voulez vous vraiment supprimer la campagne?')
    .then ((confirmed) => {
    this.campaignDataService.delete(id).subscribe(
      (result) => {
        this.campagneList.splice(indice,1)
        this.toast.show('Liste de contacts supprimée avec succès!', { classname: 'bg-success text-light', delay: 5000 });
        },
      (error) => {
        this.toast.show("Une erreur s'est produit! Veuillez réessayer", { classname: 'bg-danger text-light', delay: 5000 });

    })
  })
  .catch(() => console.log('User dismissed the dialog'));
 
  }
}
