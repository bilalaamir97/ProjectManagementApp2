import { Routes } from "@angular/router";

import { payroll_payslipComponent } from "./payroll_payslip.component";

export const payroll_payslipRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: payroll_payslipComponent
      }
    ]
  }
];
