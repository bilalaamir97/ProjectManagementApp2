import { Routes } from "@angular/router";

import { team_reportComponent } from "./team_report.component";

export const team_reportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: team_reportComponent
      }
    ]
  }
];
