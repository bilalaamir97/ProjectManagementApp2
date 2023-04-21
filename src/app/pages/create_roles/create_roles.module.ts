import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CreateRolesComponent } from "./create_roles.component";

import { RouterModule } from "@angular/router";
import { create_rolesRoutes } from "./create_roles.routing";

@NgModule({
  declarations: [CreateRolesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_rolesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_rolesModule {}
