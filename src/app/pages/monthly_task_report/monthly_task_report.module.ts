import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { monthly_task_reportComponent } from "./monthly_task_report.component";

import { RouterModule } from "@angular/router";
import { monthly_task_reportRoutes } from "./monthly_task_report.routing";

@NgModule({
  declarations: [monthly_task_reportComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(monthly_task_reportRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class monthly_task_reportModule {}
