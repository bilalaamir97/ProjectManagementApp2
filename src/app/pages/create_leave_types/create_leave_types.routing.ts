import { Routes } from "@angular/router";

import { create_leave_typesComponent } from "./create_leave_types.component";

export const create_leave_typesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_leave_typesComponent
      }
    ]
  }
];
