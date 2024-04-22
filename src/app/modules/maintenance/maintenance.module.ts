import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ClientsTablePageComponent } from './pages/clients-table-page/clients-table-page.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AreaPageComponent,
        ProfessionalPageComponent,
        AppointmentTypePageComponent,
        UsersPageComponent,
        ClientsTablePageComponent,
    ],
    imports: [
        CommonModule,
        MaintenanceRoutingModule,
        FormsModule,
        NgbModule
    ]
})
export class MaintenanceModule { }
