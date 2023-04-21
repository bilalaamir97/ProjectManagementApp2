import { Routes } from "@angular/router";

import { view_daily_attendanceComponent } from "./view_daily_attendance.component";

export const view_daily_attendanceRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: view_daily_attendanceComponent
      }
    ]
  }
];
