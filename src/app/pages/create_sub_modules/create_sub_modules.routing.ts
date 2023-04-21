import { Routes } from "@angular/router";

import { create_sub_modulesComponent } from "./create_sub_modules.component";

export const create_sub_modulesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_sub_modulesComponent
      }
    ]
  }
];
