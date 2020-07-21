import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';
import { CampaignDataService} from './../../services/campaign-data.service';
import { CampagneComponent } from '../campagne/campagne.component';
import { Campaign} from './../../models/campaign';
import {ToastService} from './../toast/toast.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent {
  title = 'angular-email-editor';
  htmlCode='';
  data;
  campaignId='';

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;
  constructor(private campaignDataService: CampaignDataService,
    private toast:ToastService) { }


  editorLoaded() {
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
    
  }
  saveCampaign() {
    this.emailEditor.editor.exportHtml((html) => {
      console.log(html)
      this.htmlCode=html;
      this.data=this.campaignDataService.getOption();
      this.campaignId=this.data.listeContacts;
      let c = new Campaign(null,
        this.data.campaignName,
        this.data.subject,
        this.data.name,
        this.data.email,
        this.data.listeContacts,
        this.htmlCode,
        new Date());
        this.campaignDataService.addCampaign(c).subscribe(
          (result) => {
            console.log(result);
            this.toast.show('Campagne ajoutée avec succès!', { classname: 'bg-success text-light', delay: 5000 });
          },
          (error) => {
            this.toast.show("Nom de campagne déjà utilisé!", { classname: 'bg-danger text-light', delay: 5000 });
            console.log(error);
          }
    
        )
    });
  }
  
  ngOnInit(): void {

  }
  /*

  sendEmail(){
    let c = new Campaign(null,
      this.data.campaignName,
      this.data.subject,
      this.data.name,
      this.data.email,
      this.data.listeContacts,
      this.htmlCode,
      new Date());
    this.campaignDataService.sendEmail(c).subscribe(
      (result) => {
        console.log(result);
        this.toast.show('Campagne envoyée avec succès!', { classname: 'bg-success text-light', delay: 5000 });
      },
      (error) => {
        this.toast.show("Un erreur s'est produit!", { classname: 'bg-danger text-light', delay: 5000 });
        console.log(error);
      }

    )
  }
  */

}
