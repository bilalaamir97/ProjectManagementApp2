import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { user_projectsComponent } from "./user_projects.component";

import { RouterModule } from "@angular/router";
import { user_projectsRoutes } from "./user_projects.routing";

@NgModule({
  declarations: [user_projectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(user_projectsRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class user_projectsModule {}
