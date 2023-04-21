import { Routes } from "@angular/router";

import { CreateRolesComponent } from "./create_roles.component";

export const create_rolesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CreateRolesComponent
      }
    ]
  }
];
