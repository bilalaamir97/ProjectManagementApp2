import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { monthly_payrollComponent } from "./monthly_payroll.component";

import { RouterModule } from "@angular/router";
import { monthly_payrollRoutes } from "./monthly_payroll.routing";

@NgModule({
  declarations: [monthly_payrollComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(monthly_payrollRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class monthly_payrollModule {}
