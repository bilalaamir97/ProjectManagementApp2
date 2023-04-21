import { Routes } from "@angular/router";

import { UserRolesComponent } from "./user_roles.component";

export const user_rolesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: UserRolesComponent
      }
    ]
  }
];
