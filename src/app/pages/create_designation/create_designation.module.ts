import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_designationComponent } from "./create_designation.component";

import { RouterModule } from "@angular/router";
import { create_designationRoutes } from "./create_designation.routing";

@NgModule({
  declarations: [create_designationComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_designationRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_designationModule {}
