import { Routes } from "@angular/router";

import { employees_activitiesComponent } from "./employees_activities.component";

export const employees_activitiesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: employees_activitiesComponent
      }
    ]
  }
];
