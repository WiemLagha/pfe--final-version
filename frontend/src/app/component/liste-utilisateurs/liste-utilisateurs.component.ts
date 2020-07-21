import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service';
import {ToastService} from './../toast/toast.service';
import {ConfirmationDialogService} from './../../services/confirmation-dialog.service';
import { ConfirmationDilogComponent } from '../confirmation-dilog/confirmation-dilog.component';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {

  usersList = []
  constructor(private userService: UserService,
    private toast: ToastService,
    private confirmationDialogService: ConfirmationDialogService) { }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.usersList=result.usersList;
        },
      (error) => {
        
      }
    )
  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Confirmer', 'Voulez vous vraiment supprimer un utilisateur?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  deleteUser(id:String,indice:number){
    this.confirmationDialogService.confirm('Confirmer', 'Supprimer un utilisateur?')
    .then ((confirmed) => {
      this.usersList.splice(indice,1)
    console.log(id);
    this.userService.delete(id).subscribe(
      (result) => {
        this.toast.show('Utilisateur supprimé avec succès!', { classname: 'bg-success text-light', delay: 5000 });
        },
      (error) => {
        this.toast.show("impossible", { classname: 'bg-danger text-light', delay: 5000 });

    })
  })
  .catch(() => console.log('User dismissed the dialog'));
 
  }


  ngOnInit() {
    this.getAllUsers();
  }

}
