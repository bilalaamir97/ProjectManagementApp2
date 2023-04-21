import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_leave_typesComponent } from "./create_leave_types.component";

import { RouterModule } from "@angular/router";
import { create_leave_typesRoutes } from "./create_leave_types.routing";

@NgModule({
  declarations: [create_leave_typesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_leave_typesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_leave_typesModule {}
