import { Routes } from "@angular/router";

import { user_module_detailsComponent } from "./user_module_details.component";

export const user_module_detailsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: user_module_detailsComponent
      }
    ]
  }
];
