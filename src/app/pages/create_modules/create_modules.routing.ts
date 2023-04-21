import { Routes } from "@angular/router";

import { create_modulesComponent } from "./create_modules.component";

export const create_modulesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_modulesComponent
      }
    ]
  }
];
