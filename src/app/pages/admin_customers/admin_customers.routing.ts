import { Routes } from "@angular/router";

import { admin_customersComponent } from "./admin_customers.component";

export const admin_customersRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: admin_customersComponent
      }
    ]
  }
];
