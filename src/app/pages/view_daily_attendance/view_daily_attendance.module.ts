import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { view_daily_attendanceComponent } from "./view_daily_attendance.component";

import { RouterModule } from "@angular/router";
import { view_daily_attendanceRoutes } from "./view_daily_attendance.routing";

@NgModule({
  declarations: [view_daily_attendanceComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(view_daily_attendanceRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class view_daily_attendanceModule {}
