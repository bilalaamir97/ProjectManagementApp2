import { Routes } from "@angular/router";

import { monthly_task_reportComponent } from "./monthly_task_report.component";

export const monthly_task_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: monthly_task_reportComponent
      }
    ]
  }
];
