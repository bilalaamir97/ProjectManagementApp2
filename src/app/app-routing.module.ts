import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AuthGuard } from '../app/pages/_guards/auth.guard';

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";

const routes: Routes = [
{
path: "",
redirectTo: "user_login",
pathMatch: "full"
},
{
path: "presentation",
component: PresentationComponent
},
{
path: "",
component: AdminLayoutComponent,
children: [
{
path: "dashboards",
loadChildren: () => import('./pages/dashboards/dashboards.module').then(m => m.DashboardsModule)

},
{
path: "components",
loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule)
},
{
path: "forms",
loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormsModules)
},
{
path: "tables",
loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
},
{
path: "maps",
loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule)
},
{
path: "widgets",
loadChildren: () => import('./pages/widgets/widgets.module').then(m => m.WidgetsModule)
},
{
path: "create_activities",
loadChildren: () => import('./pages/create_activities/create_activities.module').then(m => m.create_activitiesModule)
,canActivate: [AuthGuard]
},
{path: "create_roles",loadChildren: () => 
import('./pages/create_roles/create_roles.module').then(m => m.create_rolesModule)      
,canActivate: [AuthGuard]
},
{path: "create_users",loadChildren: () => 
import('./pages/create_users/create_users.module').then(m => m.create_usersModule)      
,canActivate: [AuthGuard]
},
{path: "change_password",loadChildren: () => 
import('./pages/change_password/change_password.module').then(m => m.change_passwordModule)      
,canActivate: [AuthGuard]
},
{path: "create_modules",loadChildren: () => 
import('./pages/create_modules/create_modules.module').then(m => m.create_modulesModule)      
,canActivate: [AuthGuard]
},
{path: "create_sub_modules",loadChildren: () => 
import('./pages/create_sub_modules/create_sub_modules.module').then(m => m.create_sub_modulesModule)      
,canActivate: [AuthGuard]
},
{path: "role_wise_modules",loadChildren: () => 
import('./pages/role_wise_modules/role_wise_modules.module').then(m => m.role_wise_modulesModule)      
,canActivate: [AuthGuard]
},
{path: "role_wise_sub_modules",loadChildren: () => 
import('./pages/role_wise_sub_modules/role_wise_sub_modules.module').then(m => m.role_wise_sub_modulesModule)      
,canActivate: [AuthGuard]
},
{path: "get_serilog",loadChildren: () => 
import('./pages/get_serilog/get_serilog.module').then(m => m.get_serilogModule)      
,canActivate: [AuthGuard]
},
{path: "customers",loadChildren: () => 
import('./pages/customers/customers.module').then(m => m.customersModule)      
,canActivate: [AuthGuard]
},
{path: "create_project",loadChildren: () => 
import('./pages/create_project/create_project.module').then(m => m.create_projectModule)      
,canActivate: [AuthGuard]
},
{path: "create_department",loadChildren: () => 
import('./pages/create_department/create_department.module').then(m => m.create_departmentModule)      
,canActivate: [AuthGuard]
},
{path: "create_designation",loadChildren: () => 
import('./pages/create_designation/create_designation.module').then(m => m.create_designationModule)      
,canActivate: [AuthGuard]
},
{path: "create_teams",loadChildren: () => 
import('./pages/create_teams/create_teams.module').then(m => m.create_teamsModule)      
,canActivate: [AuthGuard]
},
{path: "create_employees",loadChildren: () => 
import('./pages/create_employees/create_employees.module').then(m => m.create_employeesModule)      
,canActivate: [AuthGuard]
},
{path: "create_region",loadChildren: () => 
import('./pages/create_region/create_region.module').then(m => m.create_regionModule)      
,canActivate: [AuthGuard]
},
{path: "create_holiday",loadChildren: () => 
import('./pages/create_holiday/create_holiday.module').then(m => m.create_holidayModule)      
,canActivate: [AuthGuard]
},
{path: "employee_projects",loadChildren: () => 
import('./pages/employee_projects/employee_projects.module').then(m => m.employee_projectsModule)      
,canActivate: [AuthGuard]
},
{path: "employee_office_timings",loadChildren: () => 
import('./pages/employee_office_timings/employee_office_timings.module').then(m => m.employee_office_timingsModule)      
,canActivate: [AuthGuard]
},
{path: "employee_off_days",loadChildren: () => 
import('./pages/employee_off_days/employee_off_days.module').then(m => m.employee_off_daysModule)      
,canActivate: [AuthGuard]
},
{path: "team_employees",loadChildren: () => 
import('./pages/team_employees/team_employees.module').then(m => m.team_employeesModule)      
,canActivate: [AuthGuard]
},
{path: "employees_activities",loadChildren: () => 
import('./pages/employees_activities/employees_activities.module').then(m => m.employees_activitiesModule)      
,canActivate: [AuthGuard]
},
{path: "tasks",loadChildren: () => 
import('./pages/tasks/tasks.module').then(m => m.tasksModule)      
,canActivate: [AuthGuard]
},
{path: "monthly_payroll",loadChildren: () => 
import('./pages/monthly_payroll/monthly_payroll.module').then(m => m.monthly_payrollModule)      
,canActivate: [AuthGuard]
},
{path: "view_monthly_attendance_report",loadChildren: () => 
import('./pages/view_monthly_attendance_report/view_monthly_attendance_report.module').then(m => m.view_monthly_attendance_reportModule)      
,canActivate: [AuthGuard]
},
{path: "view_daily_attendance",loadChildren: () => 
import('./pages/view_daily_attendance/view_daily_attendance.module').then(m => m.view_daily_attendanceModule)      
,canActivate: [AuthGuard]
},
{path: "view_monthly_activity_report",loadChildren: () => 
import('./pages/view_monthly_activity_report/view_monthly_activity_report.module').then(m => m.view_monthly_activity_reportModule)      
,canActivate: [AuthGuard]
},
{path: "monthly_payroll_report",loadChildren: () => 
import('./pages/monthly_payroll_report/monthly_payroll_report.module').then(m => m.monthly_payroll_reportModule)      
,canActivate: [AuthGuard]
},
{path: "payroll_payslip",loadChildren: () => 
import('./pages/payroll_payslip/payroll_payslip.module').then(m => m.payroll_payslipModule)      
,canActivate: [AuthGuard]
},
{path: "monthly_customer_invoices",loadChildren: () => 
import('./pages/monthly_customer_invoices/monthly_customer_invoices.module').then(m => m.monthly_customer_invoicesModule)      
,canActivate: [AuthGuard]
},
{path: "monthly_customer_project_activities",loadChildren: () => 
import('./pages/monthly_customer_project_activities/monthly_customer_project_activities.module').then(m => m.monthly_customer_project_activitiesModule)      
,canActivate: [AuthGuard]
},
{path: "team_report",loadChildren: () => 
import('./pages/team_report/team_report.module').then(m => m.team_reportModule)      
,canActivate: [AuthGuard]
},
{path: "user_module_details",loadChildren: () => 
import('./pages/user_module_details/user_module_details.module').then(m => m.user_module_detailsModule)      
,canActivate: [AuthGuard]
},
{path: "project_employees_report",loadChildren: () => 
import('./pages/project_employees_report/project_employees_report.module').then(m => m.project_employees_reportModule)      
,canActivate: [AuthGuard]
},
{path: "day_wise_logs",loadChildren: () => 
import('./pages/day_wise_logs/day_wise_logs.module').then(m => m.day_wise_logsModule)      
,canActivate: [AuthGuard]
},
{path: "monthly_task_report",loadChildren: () => 
import('./pages/monthly_task_report/monthly_task_report.module').then(m => m.monthly_task_reportModule)      
,canActivate: [AuthGuard]
},
{path: "admin_customers",loadChildren: () => 
import('./pages/admin_customers/admin_customers.module').then(m => m.admin_customersModule)      
,canActivate: [AuthGuard]
},
{path: "activity_wise_task_report",loadChildren: () => 
import('./pages/activity_wise_task_report/activity_wise_task_report.module').then(m => m.activity_wise_task_reportModule)      
,canActivate: [AuthGuard]
},
{path: "team_wise_task_report",loadChildren: () => 
import('./pages/team_wise_task_report/team_wise_task_report.module').then(m => m.team_wise_task_reportModule)      
,canActivate: [AuthGuard]
},
{path: "employee_wise_task_report",loadChildren: () => 
import('./pages/employee_wise_task_report/employee_wise_task_report.module').then(m => m.employee_wise_task_reportModule)      
,canActivate: [AuthGuard]
},
{
path: "charts",
loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule)
},
{
path: "calendar",
loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule)
},
{
path: "examples",
loadChildren: () => import('./pages/examples/examples.module').then(m => m.ExamplesModule)
}
]
},
{
path: "",
component: AuthLayoutComponent,
children: [
{
path: "examples",
loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
},
{
path: "user_login",
loadChildren: () => import('./pages/user_login/user_login.module').then(m => m.user_loginModule)
}
]
},
{
path: "**",
redirectTo: "dashboard"
}
];

@NgModule({
imports: [
CommonModule,
BrowserModule,
RouterModule.forRoot(routes, {
useHash: true
})
],
exports: [RouterModule]
})
export class AppRoutingModule {}
