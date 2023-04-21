import { Routes } from "@angular/router";

import { day_wise_logsComponent } from "./day_wise_logs.component";

export const day_wise_logsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: day_wise_logsComponent
      }
    ]
  }
];
