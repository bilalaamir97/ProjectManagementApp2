import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { create_usersComponent } from "./create_users.component";

import { RouterModule } from "@angular/router";
import { create_usersRoutes } from "./create_users.routing";

@NgModule({
  declarations: [create_usersComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(create_usersRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class create_usersModule {}
