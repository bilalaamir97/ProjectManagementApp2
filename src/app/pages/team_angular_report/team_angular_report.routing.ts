import { Routes } from "@angular/router";

import { team_angular_reportComponent } from "./team_angular_report.component";

export const team_angular_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: team_angular_reportComponent
      }
    ]
  }
];
