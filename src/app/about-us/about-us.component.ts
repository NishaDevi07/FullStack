import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class ProfileCardComponent implements OnInit{
  constructor(private route: ActivatedRoute, private busManagementService: BusDetailsService,private router: Router) { }
  ngOnInit(){
  }
  back(){
    this.router.navigate(['about-us']);
    }
}
