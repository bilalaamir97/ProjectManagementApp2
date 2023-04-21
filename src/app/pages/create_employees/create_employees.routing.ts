import { Routes } from "@angular/router";

import { create_employeesComponent } from "./create_employees.component";

export const create_employeesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_employeesComponent
      }
    ]
  }
];
