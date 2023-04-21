import { Routes } from "@angular/router";

import { create_activitiesComponent } from "./create_activities.component";

export const create_activitiesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_activitiesComponent
      }
    ]
  }
];
