import { Routes } from "@angular/router";

import { team_employeesComponent } from "./team_employees.component";

export const team_employeesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: team_employeesComponent
      }
    ]
  }
];
