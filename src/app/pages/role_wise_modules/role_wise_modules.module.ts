import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { role_wise_modulesComponent } from "./role_wise_modules.component";

import { RouterModule } from "@angular/router";
import { role_wise_modulesRoutes } from "./role_wise_modules.routing";

@NgModule({
  declarations: [role_wise_modulesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(role_wise_modulesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class role_wise_modulesModule {}
