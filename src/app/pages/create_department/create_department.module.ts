import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_departmentComponent } from "./create_department.component";

import { RouterModule } from "@angular/router";
import { create_departmentRoutes } from "./create_department.routing";

@NgModule({
  declarations: [create_departmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_departmentRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_departmentModule {}
