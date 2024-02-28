import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { DepartmentComponent } from './department/department.component';

import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { AddJobOrderModalComponent } from './pages/add-job-order-modal/add-job-order-modal.component';

import { JobOrderListHeadComponent } from './components/job-order-list-head/job-order-list-head.component';
import { AddItemTableComponent } from './components/add-item-table/add-item-table.component';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    DepartmentComponent,
    ButtonComponent,
    FormComponent,
    LoginComponent,
    TableComponent,
    JobListComponent,
    AddJobOrderModalComponent,

    JobOrderListHeadComponent,
    AddItemTableComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
