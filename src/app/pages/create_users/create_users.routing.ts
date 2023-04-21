import { Routes } from "@angular/router";

import { create_usersComponent } from "./create_users.component";

export const create_usersRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_usersComponent
      }
    ]
  }
];
