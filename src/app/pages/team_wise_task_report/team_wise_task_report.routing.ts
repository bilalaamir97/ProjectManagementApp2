import { Routes } from "@angular/router";

import { team_wise_task_reportComponent } from "./team_wise_task_report.component";

export const team_wise_task_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: team_wise_task_reportComponent
      }
    ]
  }
];
