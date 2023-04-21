import { Routes } from "@angular/router";

import { monthly_payrollComponent } from "./monthly_payroll.component";

export const monthly_payrollRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: monthly_payrollComponent
      }
    ]
  }
];
