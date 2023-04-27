import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(public loginService:AuthenticationService,private router:Router){}
  ngOnInit(){

  }
  contactus(){
    var status=confirm("Thanks for Contacting Us We Will Reach You Soon");
    if(status==true){
      this.router.navigate(['busDetails'])
    }
  }
}
