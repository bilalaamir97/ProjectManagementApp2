import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_modulesComponent } from "./create_modules.component";

import { RouterModule } from "@angular/router";
import { create_modulesRoutes } from "./create_modules.routing";

@NgModule({
  declarations: [create_modulesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_modulesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_modulesModule {}
