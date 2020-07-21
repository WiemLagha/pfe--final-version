import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(fb: FormBuilder,
    private userService: UserService ,
    private router:Router) {
    this.loginForm = fb.group({
      login: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }
  get login() {
    return this.loginForm.get('login')
  }

  get password() {
    return this.loginForm.get('password')
  }

  ngOnInit() {
  }

  Login() {
    let data = this.loginForm.value;
    let user = new User(null,null, data.login, data.password, null, null);
    console.log(user);

    this.userService.loginUser(user).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('token',result.token);
        
        
      },
      (error) => {
        console.error("error");
        
      })
      this.router.navigate(['/dashborad']);
  }


}
