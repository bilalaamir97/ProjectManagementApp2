import { Routes } from "@angular/router";

import { employee_projectsComponent } from "./employee_projects.component";

export const employee_projectsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: employee_projectsComponent
      }
    ]
  }
];
