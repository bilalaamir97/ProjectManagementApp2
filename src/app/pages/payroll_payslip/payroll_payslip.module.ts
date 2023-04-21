import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { payroll_payslipComponent } from "./payroll_payslip.component";

import { RouterModule } from "@angular/router";
import { payroll_payslipRoutes } from "./payroll_payslip.routing";

@NgModule({
  declarations: [payroll_payslipComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(payroll_payslipRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class payroll_payslipModule {}
