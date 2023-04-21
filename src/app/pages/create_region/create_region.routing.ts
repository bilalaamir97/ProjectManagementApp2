import { Routes } from "@angular/router";

import { create_regionComponent } from "./create_region.component";

export const create_regionRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_regionComponent
      }
    ]
  }
];
