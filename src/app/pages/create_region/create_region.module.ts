import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_regionComponent } from "./create_region.component";

import { RouterModule } from "@angular/router";
import { create_regionRoutes } from "./create_region.routing";

@NgModule({
  declarations: [create_regionComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_regionRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_regionModule {}
