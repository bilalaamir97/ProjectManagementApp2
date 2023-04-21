import { Routes } from "@angular/router";

import { GetSerilogComponent } from "./get_serilog.component";

export const get_serilogRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GetSerilogComponent
      }
    ]
  }
];
