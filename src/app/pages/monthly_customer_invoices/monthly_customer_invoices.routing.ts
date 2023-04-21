import { Routes } from "@angular/router";

import { monthly_customer_invoicesComponent } from "./monthly_customer_invoices.component";

export const monthly_customer_invoicesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: monthly_customer_invoicesComponent
      }
    ]
  }
];
