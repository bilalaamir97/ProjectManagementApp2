import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { employees_activitiesComponent } from "./employees_activities.component";

import { RouterModule } from "@angular/router";
import { employees_activitiesRoutes } from "./employees_activities.routing";

@NgModule({
  declarations: [employees_activitiesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(employees_activitiesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class employees_activitiesModule {}
