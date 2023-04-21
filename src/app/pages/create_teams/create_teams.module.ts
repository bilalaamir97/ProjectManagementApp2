import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_teamsComponent } from "./create_teams.component";

import { RouterModule } from "@angular/router";
import { create_teamsRoutes } from "./create_teams.routing";

@NgModule({
  declarations: [create_teamsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_teamsRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_teamsModule {}
