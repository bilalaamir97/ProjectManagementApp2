import { Routes } from "@angular/router";

import { monthly_customer_project_activitiesComponent } from "./monthly_customer_project_activities.component";

export const monthly_customer_project_activitiesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: monthly_customer_project_activitiesComponent
      }
    ]
  }
];
