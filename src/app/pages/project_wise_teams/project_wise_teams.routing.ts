import { Routes } from "@angular/router";

import { project_wise_teamsComponent } from "./project_wise_teams.component";

export const project_wise_teamsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: project_wise_teamsComponent
      }
    ]
  }
];
