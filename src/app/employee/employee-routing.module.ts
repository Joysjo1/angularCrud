import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListemployeeComponent} from '../employee/listemployee/listemployee.component'

const routes: Routes = [
  {
    path:'listemployee',
    component:ListemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
