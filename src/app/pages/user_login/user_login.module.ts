import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { user_loginComponent } from "./user_login.component";

import { RouterModule } from "@angular/router";
import { user_loginRoutes } from "./user_login.routing";

@NgModule({
  declarations: [user_loginComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(user_loginRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class user_loginModule {}
