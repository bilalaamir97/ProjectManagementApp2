import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { monthly_payroll_reportComponent } from "./monthly_payroll_report.component";

import { RouterModule } from "@angular/router";
import { monthly_payroll_reportRoutes } from "./monthly_payroll_report.routing";

@NgModule({
  declarations: [monthly_payroll_reportComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(monthly_payroll_reportRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class monthly_payroll_reportModule {}
