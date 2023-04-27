import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bus-details-list',
  templateUrl: './bus-details-list.component.html',
  styleUrls: ['./bus-details-list.component.css']
})
export class BusDetailsListComponent implements OnInit {
  busDetails: BusDetails[] = [];
  busId: number = 0;
 
  constructor(private busDetailsService: BusDetailsService ,
    private router: Router) { }
    startingPoint: String ="";
    busDetailsFoundBySearch: BusDetails[] = [];
  
    searchBystartingPoint(){
      this.busDetailsService.findBystartingPoint(this.startingPoint)
      .subscribe( data => {
        this.busDetails = data;
        console.log(data);
        },
        error => {
          console.log(error);
        }); 
      }
  ngOnInit(): void {
    this.getBusDetails();
  }
  bookTickets(busDetails : BusDetails){
    console.log(busDetails);
    this.router.navigate(['bus-seats', busDetails.busId]);
      }
  private getBusDetails(){
    this.busDetailsService.getBusDetailsList().subscribe(data => {
      this.busDetails = data;
    });
  }

  BusDetails(busId: number){
    this.router.navigate(['busDetails', busId]);
  }

  updateBusDetails(busId: number){
    this.router.navigate(['updateBusDetails', busId]);
  }

  deleteBusDetails(busId: number){
    this.busDetailsService.deleteBusDetails(busId).subscribe( data => {
      console.log(data);
      this.getBusDetails();
    })
  }
  confirmDelete(busDetails:BusDetails){
    var status= confirm("You want to delete this record?");
     if (status==true) {
       this.deleteBusDetails(busDetails.busId);
          }
     else{
      this.getBusDetails();
     }
      
}
confirmDeleteAll(){
  var status= confirm("You want to delete all the records?");
   if (status==true) {
     this.removeAllBusDetails();
        }
   else{
    this.getBusDetails();
   }
    
}
removeAllBusDetails() : void{
  this.busDetailsService.deleteAll().subscribe( data => {
            
      console.log(data);
      this.getBusDetails();
    },
              error =>{
      console.log(error);
    });
  
 }
 fetchAcBus(){
  this.busDetailsService.findByAcBus().subscribe(
    data => {
      this.busDetails = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}
fetchNonAcBus(){
  this.busDetailsService.findByNonAcBus().subscribe(
    data => {
      this.busDetails = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

}
