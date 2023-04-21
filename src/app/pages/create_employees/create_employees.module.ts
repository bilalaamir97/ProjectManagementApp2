import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_employeesComponent } from "./create_employees.component";

import { RouterModule } from "@angular/router";
import { create_employeesRoutes } from "./create_employees.routing";

@NgModule({
  declarations: [create_employeesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_employeesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_employeesModule {}
