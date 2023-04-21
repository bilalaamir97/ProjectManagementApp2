import { Routes } from "@angular/router";

import { create_projectComponent } from "./create_project.component";

export const create_projectRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_projectComponent
      }
    ]
  }
];
