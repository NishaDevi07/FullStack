import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {AuthGaurdService} from './auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';
/*import { AboutUsComponent } from './about-us/about-us.component';*/
const routes: Routes = [
  
  {path: 'busDetails', component: BusDetailsListComponent, canActivate:[AuthGaurdService]},
  {path: 'create-bus-details', component: CreateBusDetailsComponent, canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'app-home-page', pathMatch: 'full'},
  {path: 'updateBusDetails/:busId', component: UpdateBusDetailsComponent, canActivate:[AuthGaurdService]},
  {path: 'busDetails/:busId', component:  BusInfoComponent, canActivate:[AuthGaurdService]},
  {path: 'app-login-form', component: LoginFormComponent},
  {path: 'app-logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
  {path: 'app-home-page', component: HomePageComponent},
  {path: 'profile-card', component: ProfileCardComponent},
  {path: 'feedBack', component: FeedbackComponent},
  {path: 'bus-seats/:busId', component: BusSeatsComponent},
  /*{path: 'about-us', component: AboutUsComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }