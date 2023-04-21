import { Routes } from "@angular/router";

import { view_monthly_activity_reportComponent } from "./view_monthly_activity_report.component";

export const view_monthly_activity_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: view_monthly_activity_reportComponent
      }
    ]
  }
];
