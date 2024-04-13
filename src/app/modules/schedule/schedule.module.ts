import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';
import { CancelAppointmentPageComponent } from './pages/cancel-appointment-page/cancel-appointment-page.component';
import { TodayAppointmentPageComponent } from './pages/today-appointment-page/today-appointment-page.component';
import { ClientHistoryPageComponent } from './pages/client-history-page/client-history-page.component';
import { ProfessionalSchedulePageComponent } from './pages/professional-schedule-page/professional-schedule-page.component';


@NgModule({
  declarations: [
    CreateAppointmentPageComponent,
    CancelAppointmentPageComponent,
    TodayAppointmentPageComponent,
    ClientHistoryPageComponent,
    ProfessionalSchedulePageComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
