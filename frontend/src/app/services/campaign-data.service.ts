import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Campaign } from '../models/campaign';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {
  private data= {};
  private addCampaignUrl="http://localhost:3000/campaigns/addCampaign";
  private getAllUrl="http://localhost:3000/campaigns/campaignsList";
  //private sendEmailUrl="http://localhost:3000/sendemail";
  private deleteCampaignUrl="http://localhost:3000/campaigns/delete";

  constructor(private http: HttpClient) { }

  setData(value) {      
    this.data= value;  
    console.log(this.data);
  }  
  
  getOption() {  
    return this.data;  
  }  

  getCampaigns(){
    return this.http.get<any> (this.getAllUrl); 

  }

  addCampaign(campaign:Campaign){
    let dataFromWs= this.http.post <any> (this.addCampaignUrl,campaign);
    return dataFromWs;
  }

  delete(id){
    return this.http.delete<any> (this.deleteCampaignUrl+"/"+id);
  }
/*
  sendEmail(campagne){
    let dataFromWs= this.http.post <any> (this.sendEmailUrl,campagne);
    return dataFromWs;
  }
  */
}
