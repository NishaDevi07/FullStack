import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router){

    }
     
    ngOnInit(){
      this.authenticationService.logOut();
      alert("Thanks ");
      this.router.navigate(['feedBack']);
  }
    
}



