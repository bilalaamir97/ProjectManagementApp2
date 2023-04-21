import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { monthly_customer_invoicesComponent } from "./monthly_customer_invoices.component";

import { RouterModule } from "@angular/router";
import { monthly_customer_invoicesRoutes } from "./monthly_customer_invoices.routing";

@NgModule({
  declarations: [monthly_customer_invoicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(monthly_customer_invoicesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class monthly_customer_invoicesModule {}
