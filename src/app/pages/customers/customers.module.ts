import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CustomersComponent } from "./customers.component";

import { RouterModule } from "@angular/router";
import { customersRoutes } from "./customers.routing";

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(customersRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class customersModule {}
