import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { view_monthly_attendance_reportComponent } from "./view_monthly_attendance_report.component";

import { RouterModule } from "@angular/router";
import { view_monthly_attendance_reportRoutes } from "./view_monthly_attendance_report.routing";

@NgModule({
  declarations: [view_monthly_attendance_reportComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(view_monthly_attendance_reportRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class view_monthly_attendance_reportModule {}
