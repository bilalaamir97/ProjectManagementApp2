import { Routes } from "@angular/router";

import { employee_off_daysComponent } from "./employee_off_days.component";

export const employee_off_daysRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: employee_off_daysComponent
      }
    ]
  }
];
