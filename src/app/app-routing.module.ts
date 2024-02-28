import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job/job.component';

import { LoginComponent } from './pages/login/login.component';
import { AddJobOrderModalComponent } from './pages/add-job-order-modal/add-job-order-modal.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'job',component:JobListComponent},
  {path:'addItem', component:AddJobOrderModalComponent},
  {path:'department',component:DepartmentComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
