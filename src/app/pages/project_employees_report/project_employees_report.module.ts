import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { project_employees_reportComponent } from "./project_employees_report.component";

import { RouterModule } from "@angular/router";
import { project_employees_reportRoutes } from "./project_employees_report.routing";

@NgModule({
  declarations: [project_employees_reportComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(project_employees_reportRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class project_employees_reportModule {}
