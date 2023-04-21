import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UserRolesComponent } from "./user_roles.component";

import { RouterModule } from "@angular/router";
import { user_rolesRoutes } from "./user_roles.routing";

@NgModule({
  declarations: [UserRolesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(user_rolesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class user_rolesModule {}
