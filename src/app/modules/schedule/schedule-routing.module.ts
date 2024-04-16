import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';
import { CancelAppointmentPageComponent } from './pages/cancel-appointment-page/cancel-appointment-page.component';
import { ClientHistoryPageComponent } from './pages/client-history-page/client-history-page.component';
import { ProfessionalSchedulePageComponent } from './pages/professional-schedule-page/professional-schedule-page.component';
import { TodayAppointmentPageComponent } from './pages/today-appointment-page/today-appointment-page.component';

const routes: Routes = [
    { path: "create-appointment", component: CreateAppointmentPageComponent },
    { path: "cancel-appointment", component: CancelAppointmentPageComponent },
    { path: "client-history", component: ClientHistoryPageComponent },
    { path: "professional-schedule", component: ProfessionalSchedulePageComponent },
    { path: "today-appointment", component: TodayAppointmentPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleRoutingModule { }
