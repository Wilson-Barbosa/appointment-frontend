import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaintenanceModule } from '../modules/maintenance/maintenance.module';


// Module created by myself, it's used to encapsulate logic specific to shared folder
@NgModule({
    declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent // I need to export the files I want to use outside this module
    ]
})

export class SharedModule { }
