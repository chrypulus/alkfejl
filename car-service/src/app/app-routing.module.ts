import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReslistComponent } from './reslist/reslist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent},
  { path: 'list', component: ListComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'newreservation', component: NewReservationComponent},
  { path: 'list/reservation', component: ReslistComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
