import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';

const routes: Routes = [
    { path: "clients", component: ClientsPageComponent },
    { path: "area", component: AreaPageComponent },
    { path: "professional", component: ProfessionalPageComponent },
    { path: "users", component: UsersPageComponent },
    { path: "appointment-type", component: AppointmentTypePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
