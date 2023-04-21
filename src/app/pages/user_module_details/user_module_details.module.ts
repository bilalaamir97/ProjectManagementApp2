import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { user_module_detailsComponent } from "./user_module_details.component";

import { RouterModule } from "@angular/router";
import { user_module_detailsRoutes } from "./user_module_details.routing";

@NgModule({
  declarations: [user_module_detailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(user_module_detailsRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class user_module_detailsModule {}
