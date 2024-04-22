import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';
import { ClientsTablePageComponent } from './pages/clients-table-page/clients-table-page.component';

const routes: Routes = [
    { path: "clients-table", component: ClientsTablePageComponent },
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
