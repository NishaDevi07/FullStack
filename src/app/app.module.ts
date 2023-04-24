import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateBusDetailsComponent,
    BusInfoComponent,
    BusDetailsListComponent,
    UpdateBusDetailsComponent,
    LoginFormComponent,
    ProfileCardComponent,
    FeedbackComponent,
    LogoutComponent,
    ContactUsComponent,
    HomePageComponent,
    BusSeatsComponent,
    /*AboutUsComponent,*/
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }