import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { team_employeesComponent } from "./team_employees.component";

import { RouterModule } from "@angular/router";
import { team_employeesRoutes } from "./team_employees.routing";

@NgModule({
  declarations: [team_employeesComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(team_employeesRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class team_employeesModule {}
