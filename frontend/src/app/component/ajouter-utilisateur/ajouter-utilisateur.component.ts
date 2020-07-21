import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClientModule, HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from './../toast/toast.service';
import { ToastsContainer } from './../toast/toast-container';
import { ToastComponent } from './../toast/toast.component';




@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {

  newUserForm: FormGroup;


  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastService,
    private userService: UserService,
    fb: FormBuilder,
    private cd: ChangeDetectorRef) {

    this.newUserForm = fb.group({

      name: new FormControl('', [
        Validators.required
      ]),

      login: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required
      ])
    })

  }

  show = true;
  showauto = true;
  autohide = false;
  get name() {
    return this.newUserForm.get('name');
  }

  get login() {
    return this.newUserForm.get('login');
  }

  get password() {
    return this.newUserForm.get('password');
  }

 





  ngOnInit(): void {
  }
  /*
    fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
    }
  
    preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      */
  // if (mimeType.match(/image\/*/) == null) {
  /*   return;
   }

   var reader = new FileReader();
   reader.readAsDataURL(this.fileData);
   reader.onload = (_event) => {
     this.previewUrl = reader.result;
   }
 }*/

  addUser() {

    let data = this.newUserForm.value;
    let user = new User(null, data.name, data.login, data.password, null, new Date());

    this.userService.addUser(user).subscribe(
      (result) => {
        console.log(result);
        this.toast.show('Utilisateur ajouté avec succès!', { classname: 'bg-success text-light', delay: 5000 });
      },
      (error) => {
        this.toast.show("Login déjà utilisé!", { classname: 'bg-danger text-light', delay: 5000 });
        console.log(error);
      }

    )
  }


  /*
  this.userService.addUser(
    this.newUserForm.value.name,
    this.newUserForm.value.login,
    this.newUserForm.value.password,
    this.newUserForm.value.image
  ).subscribe((event: HttpEvent<any>) => {
    switch (event.type) {
      case HttpEventType.Sent:
        console.log('Request has been made!');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Response header has been received!');
        break;
      case HttpEventType.UploadProgress:
        this.percentDone = Math.round(event.loaded / event.total * 100);
        console.log(`Uploaded! ${this.percentDone}%`);
        break;
      case HttpEventType.Response:
        console.log('User successfully created!', event.body);
        this.percentDone = false;
        this.router.navigate(['app-liste-utilisateurs'])
    }
  })
  */

}
