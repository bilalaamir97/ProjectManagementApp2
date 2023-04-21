import { Routes } from "@angular/router";

import { tasksComponent } from "./tasks.component";

export const tasksRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: tasksComponent
      }
    ]
  }
];
