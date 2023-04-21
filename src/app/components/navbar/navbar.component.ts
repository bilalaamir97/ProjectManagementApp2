import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import {
Location,
LocationStrategy,
PathLocationStrategy
} from "@angular/common";

@Component({
selector: "app-navbar",
templateUrl: "./navbar.component.html",
styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
public focus;
public listTitles: any[];
public location: Location;
sidenavOpen: boolean = true;

getModulesData: any;
getSubModulesData: any;        

showMenu: string = '';
showSubMenu: string = '';
user_id = '';
user_name = '';
data = [];
branch_name = '';
picture = '';
activeuser = "";
mainmenu = "";
submenus = "";
menu_id = "";
role_id = "";
userroleDesc = "";


constructor(
location: Location,
private element: ElementRef,
private router: Router
) {
this.location = location;
this.router.events.subscribe((event: Event) => {
if (event instanceof NavigationStart) {
  // Show loading indicator

}
if (event instanceof NavigationEnd) {
  // Hide loading indicator

  if (window.innerWidth < 1200) {
    document.body.classList.remove("g-sidenav-pinned");
    document.body.classList.add("g-sidenav-hidden");
    this.sidenavOpen = false;
  }
}

if (event instanceof NavigationError) {
  // Hide loading indicator

  // Present error to user
  console.log(event.error);
}
});

}

ngOnInit() {

this.user_id = localStorage.getItem('user_id');    
this.user_name =  localStorage.getItem('currentUser');    
this.role_id =  localStorage.getItem('roleId');    
this.userroleDesc =  localStorage.getItem('userRoleDesc');    
  

this.listTitles = ROUTES.filter(listTitle => listTitle);
}
getTitle() {
var titlee = this.location.prepareExternalUrl(this.location.path());
if (titlee.charAt(0) === "#") {
titlee = titlee.slice(1);
}

for (var item = 0; item < this.listTitles.length; item++) {
if (this.listTitles[item].path === titlee) {
return this.listTitles[item].title;
}
}
return "Dashboard";
}

openSearch() {
document.body.classList.add("g-navbar-search-showing");
setTimeout(function() {
document.body.classList.remove("g-navbar-search-showing");
document.body.classList.add("g-navbar-search-show");
}, 150);
setTimeout(function() {
document.body.classList.add("g-navbar-search-shown");
}, 300);
}
closeSearch() {
document.body.classList.remove("g-navbar-search-shown");
setTimeout(function() {
document.body.classList.remove("g-navbar-search-show");
document.body.classList.add("g-navbar-search-hiding");
}, 150);
setTimeout(function() {
document.body.classList.remove("g-navbar-search-hiding");
document.body.classList.add("g-navbar-search-hidden");
}, 300);
setTimeout(function() {
document.body.classList.remove("g-navbar-search-hidden");
}, 500);
}
openSidebar() {
if (document.body.classList.contains("g-sidenav-pinned")) {
document.body.classList.remove("g-sidenav-pinned");
document.body.classList.add("g-sidenav-hidden");
this.sidenavOpen = false;
} else {
document.body.classList.add("g-sidenav-pinned");
document.body.classList.remove("g-sidenav-hidden");
this.sidenavOpen = true;
}
}
toggleSidenav() {
if (document.body.classList.contains("g-sidenav-pinned")) {
document.body.classList.remove("g-sidenav-pinned");
document.body.classList.add("g-sidenav-hidden");
this.sidenavOpen = false;
} else {
document.body.classList.add("g-sidenav-pinned");
document.body.classList.remove("g-sidenav-hidden");
this.sidenavOpen = true;
}
}
}
