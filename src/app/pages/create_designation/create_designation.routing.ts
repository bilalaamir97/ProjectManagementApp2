import { Routes } from "@angular/router";

import { create_designationComponent } from "./create_designation.component";

export const create_designationRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_designationComponent
      }
    ]
  }
];
