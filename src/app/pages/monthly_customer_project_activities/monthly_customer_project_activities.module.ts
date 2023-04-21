import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { monthly_customer_project_activitiesComponent } from "./monthly_customer_project_activities.component";

import { RouterModule } from "@angular/router";
import { monthly_customer_project_activitiesRoutes } from "./monthly_customer_project_activities.routing";

@NgModule({
  declarations: [monthly_customer_project_activitiesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(monthly_customer_project_activitiesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class monthly_customer_project_activitiesModule {}
