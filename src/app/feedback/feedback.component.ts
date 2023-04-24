import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{
 constructor(private route: ActivatedRoute, private busManagementService: BusDetailsService,private router: Router) { }
  ngOnInit(){
  }
  send(){
    alert("Your Feedback is submitted successfully");
    this.router.navigate(['app-home-page']);
    }
}


