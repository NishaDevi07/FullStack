import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
 
  username = '';
  password = '';
  invalidLogin = false
  emessage = '';

  constructor(private router: Router,
    private loginservice: AuthenticationService){}
  
    ngOnInit() {
       }
       checkLogin(){
        if(this.loginservice.authenticate(this.username,this.password)){
          this.router.navigate(['busDetails']);
          console.log("navigate..");
          this.invalidLogin = false;
        } else 
        this.invalidLogin = true;
        this.emessage = 'Check Your Entries';
       }
  }
  