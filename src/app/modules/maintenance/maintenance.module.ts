import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';



@NgModule({
    declarations: [
        AreaPageComponent,
        ProfessionalPageComponent,
        AppointmentTypePageComponent,
        UsersPageComponent,
        ClientsPageComponent
    ],
    imports: [
        CommonModule,
        MaintenanceRoutingModule
    ]
})
export class MaintenanceModule { }
