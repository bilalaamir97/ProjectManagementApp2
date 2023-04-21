import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { team_wise_task_reportComponent } from "./team_wise_task_report.component";

import { RouterModule } from "@angular/router";
import { team_wise_task_reportRoutes } from "./team_wise_task_report.routing";

@NgModule({
  declarations: [team_wise_task_reportComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(team_wise_task_reportRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class team_wise_task_reportModule {}
