import { Routes } from "@angular/router";

import { activity_wise_task_reportComponent } from "./activity_wise_task_report.component";

export const activity_wise_task_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: activity_wise_task_reportComponent
      }
    ]
  }
];
