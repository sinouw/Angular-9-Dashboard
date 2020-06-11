import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsAddComponent } from './departments-add/departments-add.component';
import { DepartmentsEditComponent } from './departments-edit/departments-edit.component';


@NgModule({
  declarations: [DepartmentsListComponent, DepartmentsAddComponent, DepartmentsEditComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
