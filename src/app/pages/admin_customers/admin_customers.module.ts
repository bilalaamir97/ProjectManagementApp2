import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { admin_customersComponent } from "./admin_customers.component";

import { RouterModule } from "@angular/router";
import { admin_customersRoutes } from "./admin_customers.routing";

@NgModule({
  declarations: [admin_customersComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(admin_customersRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class admin_customersModule {}
