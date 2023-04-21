import { Routes } from "@angular/router";

import { create_holidayComponent } from "./create_holiday.component";

export const create_holidayRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: create_holidayComponent
      }
    ]
  }
];
