import { Routes } from "@angular/router";

import { project_employees_reportComponent } from "./project_employees_report.component";

export const project_employees_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: project_employees_reportComponent
      }
    ]
  }
];
