import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { employee_off_daysComponent } from "./employee_off_days.component";

import { RouterModule } from "@angular/router";
import { employee_off_daysRoutes } from "./employee_off_days.routing";

@NgModule({
  declarations: [employee_off_daysComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(employee_off_daysRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class employee_off_daysModule {}
