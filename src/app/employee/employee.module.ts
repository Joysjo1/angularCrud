import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListemployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
