import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_holidayComponent } from "./create_holiday.component";

import { RouterModule } from "@angular/router";
import { create_holidayRoutes } from "./create_holiday.routing";

@NgModule({
  declarations: [create_holidayComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_holidayRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_holidayModule {}
