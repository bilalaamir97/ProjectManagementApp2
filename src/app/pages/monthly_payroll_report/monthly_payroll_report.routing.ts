import { Routes } from "@angular/router";

import { monthly_payroll_reportComponent } from "./monthly_payroll_report.component";

export const monthly_payroll_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: monthly_payroll_reportComponent
      }
    ]
  }
];
