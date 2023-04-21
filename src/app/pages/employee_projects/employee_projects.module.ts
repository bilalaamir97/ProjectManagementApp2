import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { employee_projectsComponent } from "./employee_projects.component";

import { RouterModule } from "@angular/router";
import { employee_projectsRoutes } from "./employee_projects.routing";

@NgModule({
  declarations: [employee_projectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(employee_projectsRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class employee_projectsModule {}
