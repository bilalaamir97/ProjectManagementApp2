import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { GetSerilogComponent } from "./get_serilog.component";

import { RouterModule } from "@angular/router";
import { get_serilogRoutes } from "./get_serilog.routing";

@NgModule({
  declarations: [GetSerilogComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(get_serilogRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class get_serilogModule {}
