import { Routes } from "@angular/router";

import { role_wise_sub_modulesComponent } from "./role_wise_sub_modules.component";

export const role_wise_sub_modulesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: role_wise_sub_modulesComponent
      }
    ]
  }
];
