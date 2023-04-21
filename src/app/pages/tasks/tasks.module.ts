import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { tasksComponent } from "./tasks.component";

import { RouterModule } from "@angular/router";
import { tasksRoutes } from "./tasks.routing";

@NgModule({
  declarations: [tasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(tasksRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class tasksModule {}
