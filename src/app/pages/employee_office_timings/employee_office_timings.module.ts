import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { employee_office_timingsComponent } from "./employee_office_timings.component";

import { RouterModule } from "@angular/router";
import { employee_office_timingsRoutes } from "./employee_office_timings.routing";

@NgModule({
  declarations: [employee_office_timingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(employee_office_timingsRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class employee_office_timingsModule {}
