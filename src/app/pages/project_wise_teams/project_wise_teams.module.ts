import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { project_wise_teamsComponent } from "./project_wise_teams.component";

import { RouterModule } from "@angular/router";
import { project_wise_teamsRoutes } from "./project_wise_teams.routing";

@NgModule({
  declarations: [project_wise_teamsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(project_wise_teamsRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class project_wise_teamsModule {}
