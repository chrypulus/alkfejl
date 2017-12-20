import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReservationsService } from './reservations.service';
import { ReservationComponent } from './reservation/reservation.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { WorksheetService } from './worksheet.service';
import { RegistrationComponent } from './registration/registration.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReslistComponent } from './reslist/reslist.component';
import { NewwsComponent } from './newws/newws.component';
import { PartsService } from './parts.service';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
  MatFormFieldModule, MatInputModule,
  MatButtonToggleModule, MatListModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WsFormComponent } from './ws-form/ws-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ReservationComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    WorksheetComponent,
    RegistrationComponent,
    NewReservationComponent,
    ReslistComponent,
    NewwsComponent,
    WsFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonToggleModule,
    FormsModule,
  ],
  providers: [ReservationsService, UserService, WorksheetService, PartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
