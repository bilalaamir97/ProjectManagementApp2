import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";

import { UserService } from '../../_services/user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const GET_TOTAL_CUSTOMER_API = 'https://llalwani.com:8097/api/Dashboard/TotalCustomers';
const GET_TOTAL_PROJECT_API = 'https://llalwani.com:8097/api/Dashboard/TotalProject';
const GET_TOTAL_ACTIVITIES_API = 'https://llalwani.com:8097/api/Dashboard/TotalActivities';
const GET_TOTAL_TEAMS_API = 'https://llalwani.com:8097/api/Dashboard/TotalTeams';
const GET_TOTAL_EMPLOYEES_API = 'https://llalwani.com:8097/api/Dashboard/TotalEmployees';
const GET_TOTAL_USERS_API = 'https://llalwani.com:8097/api/Dashboard/TotalUsers';

const GET_ACTIVITIES_API = 'https://llalwani.com:8097/api/v1.0/activities/GetAll';
const GET_CUSTOMERS_API = 'https://llalwani.com:8097/api/v1.0/customers/GetAll';
const GET_USERS_API = 'https://llalwani.com:8097/api/Account/GetAll';
const GET_EMPLOYEES_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';
const GET_TEAMS_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';
const GET_PROJECT_API = 'https://llalwani.com:8097/api/v1.0/Project/GetAll';

const GET_Serilog_API = 'https://llalwani.com:8097/api/Dashboard/GetSerilog';
const GET_DailyAttendanceDetail_API = 'https://llalwani.com:8097/api/Dashboard/DailyAttendanceDetail';
const GET_ActivitiesDetails_API = 'https://llalwani.com:8097/api/Dashboard/ActivitiesDetails';
const GET_EmployeeWiseActivityDetails_API = 'https://llalwani.com:8097/api/Dashboard/EmployeeWiseActivityDetails';
const GET_MonthlyPayrollDetails_API = 'https://llalwani.com:8097/api/Dashboard/MonthlyPayrollDetails';
const GET_CustomerInvoiceDetails_API = 'https://llalwani.com:8097/api/Dashboard/CustomerInvoiceDetails';

const GET_Tasks_ALL_API = 'https://llalwani.com:8097/api/v1.0/tasks/GetAll';

const GET_Tasks_API = 'https://llalwani.com:8097/api/v1.0/tasks';
const GET_TeamEmployees_API = 'https://llalwani.com:8097/api/v1.0/TeamEmployees';
const GET_EmpOfficeTimings_API = 'https://llalwani.com:8097/api/v1.0/EmpOfficeTimings';
const GET_EmpProjects_API = 'https://llalwani.com:8097/api/v1.0/EmpProjects';
const GET_EmployeesActivities_API = 'https://llalwani.com:8097/api/v1.0/EmployeesActivities';
const GET_EmpOffDays_API = 'https://llalwani.com:8097/api/v1.0/EmpOffDays';
const GET_EmpAttendance_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Employee_Attendance?filter=1';
const GET_IsTeamLeader_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_IsTeamLeader?filter=1';

const GET_TeamEmpProject_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Project?filter=1';
const GET_TeamEmpTimings_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Timings?filter=1';
const GET_TeamEmpOffDaysTimings_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Off_Days?filter=1&';
const GET_TeamEmps_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emps?filter=1';
const GET_TeamEmpTask_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Tasks?filter=1';
const GET_TeamEmpActivities_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Activities?filter=1';
const GET_TeamEmpAttendance_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Attendance?filter=1';

const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/tasks/';

const APPROVE_ATT_ADMIN_API = 'https://llalwani.com:8097/api/Dashboard/ApproveAttAdmin';
const APPROVE_ATT_TEAM_LEAD_API = 'https://llalwani.com:8097/api/Dashboard/ApproveAttTeamLead';

const APPROVE_TASK_ADMIN_API = 'https://llalwani.com:8097/api/Dashboard/ApproveTaskAdmin';
const APPROVE_TASK_TEAM_LEAD_API = 'https://llalwani.com:8097/api/Dashboard/ApproveTaskTeamLead';

const UPDATE_ATTENDANCE_IN_API = 'https://llalwani.com:8097/api/Dashboard/Update_Attendance_In';
const UPDATE_ATTENDANCE_OUT_API = 'https://llalwani.com:8097/api/Dashboard/Update_Attendance_Out';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample22
} from "../../../variables/charts";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {

  content?: string;
now: string;
datetimenow:string;
user_name: any;
getSerilog: any;
getDailyAttendanceDetail: any;
getActivitiesDetails: any;
getEmployeeWiseActivityDetails: any;
getMonthlyPayrollDetails: any;
getCustomerInvoiceDetails: any;
dashboardEmployeeId : any;
dashboardisTeamLead : any;

display1="none";

 openModalCustomer()
 {
 this.modeldisplay="block";
 }
 onCloseHandled()
 {
 this.modeldisplay="none";
 }

openModal1()
{
this.modeldisplay1="block";
}
onCloseHandled1()
{
this.modeldisplay1="none";
}

openModal2()
{
this.modeldisplay2="block";
}
onCloseHandled2()
{
this.modeldisplay2="none";
}

openModal3()
{
this.modeldisplay3="block";
}
onCloseHandled3()
{
this.modeldisplay3="none";
}

openModal4()
{
this.modeldisplay4="block";
}
onCloseHandled4()
{
this.modeldisplay4="none";
}

openModal5()
{
this.modeldisplay5="block";
}
onCloseHandled5()
{
this.modeldisplay5="none";
}


getActivitiesData: any;
getCustomersData: any;
getUsersData: any;
getEmployeesData: any;
getTeamsData: any;
getProjectData: any;

getTOTALCUSTOMER: any;
getTOTALPROJECT: any;
getTOTALACTIVITIES: any;
getTOTALTEAMS: any;
getTOTALEMPLOYEES: any;
getTOTALUSERS: any;

modeldisplay="none";
modeldisplay1="none";
modeldisplay2="none";
modeldisplay3="none";
modeldisplay4="none";
modeldisplay5="none";


displayattadmin="none";
displayattteamlead="none";
displaytaskadmin="none";
displaytaskteamlead="none";

displayattupdatein="none";
displayattupdateout="none";

getTasksAllData: any;

getTasksData: any;
getTeamEmployeesData: any;
getEmpOfficeTimingsData: any;
getEmpProjectsData: any;
getEmployeesActivitiesData: any;
getEmpOffDaysData: any;
getEmpAttData: any;
getIsTeamLeaderData: any;

getTeamEmpProjectData: any;
getTeamEmpTimingsData: any;
getTeamEmpOffDaysTimingsData: any;
getTeamEmpsData: any;
getTeamEmpTaskData: any;
getTeamEmpActivitiesData: any;
getTeamEmpAttendanceData: any;

form: any = {
id:null,
remarks:null,
time_in:null,
time_out:null
};
    
openModalattadmin()
{
this.displayattadmin="block";
}

onCloseHandledattadmin()
{
this.displayattadmin="none";
}

openModalattteamlead()
{
this.displayattteamlead="block";
}

onCloseHandledattteamlead()
{
this.displayattteamlead="none";
}

openModaltaskadmin()
{
this.displaytaskadmin="block";
}

onCloseHandledtaskadmin()
{
this.displaytaskadmin="none";
}

openModaltaskteamlead()
{
this.displaytaskteamlead="block";
}

onCloseHandledtaskteamlead()
{
this.displaytaskteamlead="none";
}


openModal_attendance_in()
{
this.displayattupdatein="block";
}

onCloseHandled_attendance_in()
{
this.displayattupdatein="none";
}

openModal_attendance_out()
{
this.displayattupdateout="block";
}

onCloseHandled_attendance_out()
{
this.displayattupdateout="none";
}

edit_attendance_in(id:any,time_in:any)
{

this.form.id = id;
this.form.time_in = time_in;

}

edit_attendance_out(id:any,time_out:any)
{

this.form.id = id;
this.form.time_out = time_out;

}

editadminatt(id:any)
{

this.form.id = id;
this.form.remarks = "";

}

editteamleadatt(id:any)
{

    this.form.id = id;
    this.form.remarks = "";

}

editadmintask(id:any)
{

    this.form.id = id;
    this.form.remarks = "";

}

editteamleadtask(id:any)
{

    this.form.id = id;
    this.form.remarks = "";

}

edit_attendance_in_submit()
{

const { id,time_in } = this.form;

this.http.get(
UPDATE_ATTENDANCE_IN_API  +"?Id="+`${id}`+"&TimeIn="+`${time_in}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData2();

})

}

edit_attendance_out_submit()
{

const { id,time_out } = this.form;

this.http.get(
UPDATE_ATTENDANCE_OUT_API  +"?Id="+`${id}`+"&TimeOut="+`${time_out}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData2();

})

}

approvetaskteamlead()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_TASK_TEAM_LEAD_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="+`${this.datetimenow}`
+"&ApproverEmail="+`${this.user_name}` 
+"&ApproverRemarks="+`${remarks}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchDataTeam();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

approvetaskadmin()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_TASK_ADMIN_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="+`${this.datetimenow}`
+"&ApproverEmail="+`${this.user_name}`
+"&ApproverRemarks="+`${remarks}`  
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

approveattteamlead()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_ATT_TEAM_LEAD_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="+`${this.datetimenow}`
+"&ApproverEmail="+`${this.user_name}` 
+"&ApproverRemarks="+`${remarks}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchDataTeam();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

approveattadmin()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_ATT_ADMIN_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="
+`${this.datetimenow}`+"&ApproverEmail="+`${this.user_name}`
+"&ApproverRemarks="+`${remarks}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

start(id,taskTitle,activityId,empId,
startDateTime,endDateTime,timeEstimationHours,taskDescription,
teamId,rowVersion,started,startedTime,closed,closedTime,
completed,abandoned)
{

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{

id : id,
taskTitle : taskTitle,
activityId: activityId,
empId: empId,
startDateTime: startDateTime,
endDateTime: endDateTime,
timeEstimationHours: timeEstimationHours,
taskDescription: taskDescription,
teamId: teamId,
rowVersion: rowVersion,
started: "Yes",
startedTime: this.now,
closed: "",
closedTime: "",
completed: "",
abandoned: ""

} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData2();

})


}

}

close(id,taskTitle,activityId,empId,
startDateTime,endDateTime,timeEstimationHours,taskDescription,
teamId,rowVersion,started,startedTime,closed,closedTime,
completed,abandoned)
{

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{

id : id,
taskTitle : taskTitle,
activityId: activityId,
empId: empId,
startDateTime: startDateTime,
endDateTime: endDateTime,
timeEstimationHours: timeEstimationHours,
taskDescription: taskDescription,
teamId: teamId,
rowVersion: rowVersion,
started: started,
startedTime: startedTime,
closed: "Yes",
closedTime: this.now,
completed: "Yes",
abandoned: "No"

} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData2();

})


}

}

openModal()
{

if(this.display1 == "none")
{ 
this.display1="block";
}
else
{
this.display1="none"; 
}

}

abandon(id,taskTitle,activityId,empId,
startDateTime,endDateTime,timeEstimationHours,taskDescription,
teamId,rowVersion,started,startedTime,closed,closedTime,
completed,abandoned)
{

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{

id : id,
taskTitle : taskTitle,
activityId: activityId,
empId: empId,
startDateTime: startDateTime,
endDateTime: endDateTime,
timeEstimationHours: timeEstimationHours,
taskDescription: taskDescription,
teamId: teamId,
rowVersion: rowVersion,
started: started,
startedTime: startedTime,
closed: "No",
closedTime: "",
completed: "No",
abandoned: "Yes"


} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData2();

})


}

}


fetchDataTeam()
{

this.http.get(
GET_TeamEmpProject_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpProjectData = res;

})

this.http.get(
GET_TeamEmpTimings_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpTimingsData = res;

})

this.http.get(
GET_TeamEmpOffDaysTimings_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpOffDaysTimingsData = res;

})

this.http.get(
GET_TeamEmps_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpsData = res;

})

this.http.get(
GET_TeamEmpTask_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpTaskData = res;

})

this.http.get(
GET_TeamEmpActivities_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpActivitiesData = res;

})

this.http.get(
GET_TeamEmpAttendance_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpAttendanceData = res;

})


}

fetchData2()
{

this.http.get(
GET_IsTeamLeader_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getIsTeamLeaderData = res;

this.dashboardisTeamLead = this.getIsTeamLeaderData[0].isTeamLeader;

if(this.getIsTeamLeaderData[0].isTeamLeader == 'Yes')
{

this.fetchDataTeam(); 

}

})

this.http.get(
GET_EmpAttendance_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpAttData = res;

})

this.http.get(
GET_Tasks_API  +"/" + `${this.dashboardEmployeeId}` + "/Tasks"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTasksData = res;

})

this.http.get(
GET_TeamEmployees_API  +"/" + `${this.dashboardEmployeeId}` + "/TeamEmployees"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmployeesData = res;

})

this.http.get(
GET_EmpOfficeTimings_API +"/" + `${this.dashboardEmployeeId}` + "/EmpOfficeTimings"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpOfficeTimingsData = res;

})

this.http.get(
GET_EmpProjects_API +"/" + `${this.dashboardEmployeeId}` + "/EmpProjects"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpProjectsData = res;

})

this.http.get(
GET_EmployeesActivities_API +"/" + `${this.dashboardEmployeeId}` + "/EmployeesActivities"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeesActivitiesData = res;

})

this.http.get(
GET_EmpOffDays_API +"/" + `${this.dashboardEmployeeId}` + "/EmpOffDays"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpOffDaysData = res;

})

}

fetchData()
{

  this.http.get(
    GET_ACTIVITIES_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getActivitiesData = res;
    
    })
    
    this.http.get(
    GET_CUSTOMERS_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getCustomersData = res;
    
    })
    
    this.http.get(
    GET_USERS_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getUsersData = res;
    
    })
    
    this.http.get(
    GET_EMPLOYEES_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getEmployeesData = res;
    
    })
    
    this.http.get(
    GET_TEAMS_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getTeamsData = res;
    
    })
    
    this.http.get(
    GET_PROJECT_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getProjectData = res;
    
    })
                        
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////    
    this.http.get(
    GET_TOTAL_CUSTOMER_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getTOTALCUSTOMER = res;
    
    })
    
    this.http.get(
    GET_TOTAL_PROJECT_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getTOTALPROJECT = res;
    
    })
    
    this.http.get(
    GET_TOTAL_ACTIVITIES_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getTOTALACTIVITIES = res;
    
    })
    
    this.http.get(
    GET_TOTAL_TEAMS_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getTOTALTEAMS = res;
    
    })
    
    this.http.get(
    GET_TOTAL_EMPLOYEES_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getTOTALEMPLOYEES = res;
    
    })
    
    this.http.get(
    GET_TOTAL_USERS_API , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getTOTALUSERS = res;
    
    })

this.http.get(
GET_Tasks_ALL_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTasksAllData = res;

})

this.http.get(
GET_Serilog_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getSerilog = res;

})

this.http.get(
GET_DailyAttendanceDetail_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getDailyAttendanceDetail = res;

})

this.http.get(
GET_ActivitiesDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getActivitiesDetails = res;

})

this.http.get(
GET_EmployeeWiseActivityDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeeWiseActivityDetails = res;

})

this.http.get(
GET_MonthlyPayrollDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getMonthlyPayrollDetails = res;

})

this.http.get(
GET_CustomerInvoiceDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getCustomerInvoiceDetails = res;

})

}

public barChartOptionsTask: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  barThickness : 3
  };
  
  public barChartLabelsTask: string[] = [
  'AMMAD ZAHEER',
  'ZAHID SHAH',
  'FARHAN KHAN',
  'ALI UR REHMAN',
  'IMRAN SALEEM',
  'SHAHZAD AAMIR',
  'AMMAR ZAFAR',
  ];
  public barChartTypeTask: string = 'bar';
  public barChartLegendTask: boolean = true;
  
  public barChartDataTask: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Task Completed' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Task Pending' }
  ];
  
  public barChartColorsTask: Array<any> = [
  {backgroundColor: '#00c292'},
  {backgroundColor: '#03a9f3'}
  ];
  
  

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor(private userService: UserService,
    private http: HttpClient) {}

  ngOnInit() {

    this.dashboardEmployeeId = localStorage.getItem("employeeId");

    if(this.dashboardEmployeeId == 'null')
    {
    this.fetchData();
    }
    else
    {
    
    this.fetchData2();
    
    }

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];

    var chartOrders = <HTMLCanvasElement> document.getElementById("chart-bars");

    parseOptions(Chart, chartOptions());

    var ordersChart = new Chart(chartOrders, {
      type: "bar",
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartOrders2 = <HTMLCanvasElement> document.getElementById("chart-bars2");

    parseOptions(Chart, chartOptions());

    var ordersChart2 = new Chart(chartOrders2, {
      type: "bar",
      options: chartExample22.options,
      data: chartExample22.data
    });


    var chartSales = <HTMLCanvasElement> document.getElementById("chart-sales-dark");

    this.salesChart = new Chart(chartSales, {
      type: "line",
      options: chartExample1.options,
      data: chartExample1.data
    });
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
