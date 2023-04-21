import { Routes } from "@angular/router";

import { employee_office_timingsComponent } from "./employee_office_timings.component";

export const employee_office_timingsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: employee_office_timingsComponent
      }
    ]
  }
];
