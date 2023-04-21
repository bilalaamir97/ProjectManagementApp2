import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { GetUsersComponent } from "./get_users.component";

import { RouterModule } from "@angular/router";
import { get_usersRoutes } from "./get_users.routing";

@NgModule({
  declarations: [GetUsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(get_usersRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class get_usersModule {}
