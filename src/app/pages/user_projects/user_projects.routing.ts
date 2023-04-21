import { Routes } from "@angular/router";

import { user_projectsComponent } from "./user_projects.component";

export const user_projectsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: user_projectsComponent
      }
    ]
  }
];
