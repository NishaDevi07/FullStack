import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  userName = '';
  email = '';
  password = '';
  visible:boolean = true;
  changetype:boolean =true;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  /* ngOnInit called automatically by angular when component is initialized */
  ngOnInit() {
  }
  /* Method for checking the fields are empty or not when we submit a signup form and showing a popup regarding to that. Then the page is navigate to login */
  confirmSignup(){
    if((this.userName === '') || (this.email === '') || (this.password === '')){
      let status = confirm("Please fill all the fields");
    }
    else{
    var status= confirm("Do you want to register?");
      if (status == true) {
        var status= confirm("Registered Successfully!");
        this.router.navigate(['app-login-form']);
        }
      }
    }
  /* Defining the method for toggle the eye icon */
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}

