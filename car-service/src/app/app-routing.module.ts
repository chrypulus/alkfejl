import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReslistComponent } from './reslist/reslist.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'newreservation', component: NewReservationComponent, canActivate: [AuthGuard], data: {roles: ['PARTNER', 'WORKER']}},
  { path: 'list/reservation', component: ReslistComponent, canActivate: [AuthGuard], data: {roles: ['PARTNER', 'WORKER']}},
  { path: 'reservation/:id', component: WorksheetComponent,  canActivate: [AuthGuard], data: {roles: ['PARTNER', 'WORKER']}},
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
