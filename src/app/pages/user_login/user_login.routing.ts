import { Routes } from "@angular/router";

import { user_loginComponent } from "./user_login.component";

export const user_loginRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: user_loginComponent
      }
    ]
  }
];
