import { Routes } from "@angular/router";

import { role_wise_modulesComponent } from "./role_wise_modules.component";

export const role_wise_modulesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: role_wise_modulesComponent
      }
    ]
  }
];
