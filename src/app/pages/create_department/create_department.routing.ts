import { Routes } from "@angular/router";

import { create_departmentComponent } from "./create_department.component";

export const create_departmentRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_departmentComponent
      }
    ]
  }
];
