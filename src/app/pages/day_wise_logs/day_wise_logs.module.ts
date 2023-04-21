import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { day_wise_logsComponent } from "./day_wise_logs.component";

import { RouterModule } from "@angular/router";
import { day_wise_logsRoutes } from "./day_wise_logs.routing";

@NgModule({
  declarations: [day_wise_logsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(day_wise_logsRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class day_wise_logsModule {}
