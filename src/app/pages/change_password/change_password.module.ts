import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgbdChangePasswordBasic } from "./change_password.component";

import { RouterModule } from "@angular/router";
import { change_passwordRoutes } from "./change_password.routing";

@NgModule({
  declarations: [NgbdChangePasswordBasic],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(change_passwordRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class change_passwordModule {}
