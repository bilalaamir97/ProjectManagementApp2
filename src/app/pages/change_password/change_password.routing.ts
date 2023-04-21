import { Routes } from "@angular/router";

import { NgbdChangePasswordBasic } from "./change_password.component";

export const change_passwordRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: NgbdChangePasswordBasic
      }
    ]
  }
];
