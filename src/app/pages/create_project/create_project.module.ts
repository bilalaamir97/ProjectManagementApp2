import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_projectComponent } from "./create_project.component";

import { RouterModule } from "@angular/router";
import { create_projectRoutes } from "./create_project.routing";

@NgModule({
  declarations: [create_projectComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_projectRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_projectModule {}
