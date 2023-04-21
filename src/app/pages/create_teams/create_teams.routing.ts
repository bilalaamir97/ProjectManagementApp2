import { Routes } from "@angular/router";

import { create_teamsComponent } from "./create_teams.component";

export const create_teamsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_teamsComponent
      }
    ]
  }
];
