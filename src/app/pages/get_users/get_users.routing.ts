import { Routes } from "@angular/router";

import { GetUsersComponent } from "./get_users.component";

export const get_usersRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GetUsersComponent
      }
    ]
  }
];
