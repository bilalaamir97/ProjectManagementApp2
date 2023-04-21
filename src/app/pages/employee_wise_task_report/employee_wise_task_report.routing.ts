import { Routes } from "@angular/router";

import { employee_wise_task_reportComponent } from "./employee_wise_task_report.component";

export const employee_wise_task_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: employee_wise_task_reportComponent
      }
    ]
  }
];
