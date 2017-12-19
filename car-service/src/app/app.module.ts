import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReservationsService } from './reservations.service';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { WorksheetService } from './worksheet.service';
import { RegistrationComponent } from './registration/registration.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReslistComponent } from './reslist/reslist.component';
import { NewwsComponent } from './newws/newws.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ReservationComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    ListComponent,
    WorksheetComponent,
    RegistrationComponent,
    NewReservationComponent,
    ReslistComponent,
    NewwsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ReservationsService, UserService, WorksheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
