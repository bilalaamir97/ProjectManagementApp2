import { Routes } from "@angular/router";

import { view_monthly_attendance_reportComponent } from "./view_monthly_attendance_report.component";

export const view_monthly_attendance_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: view_monthly_attendance_reportComponent
      }
    ]
  }
];
