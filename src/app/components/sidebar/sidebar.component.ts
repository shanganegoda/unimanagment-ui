import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  role: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
    role: "",
  },
  {
    path: "/gpa",
    title: "GPA Calculator",
    icon: "ni-tv-2 text-primary",
    class: "",
    role: "student",
  },
  {
    path: "/view-results",
    title: "View Results",
    icon: "ni-tv-2 text-primary",
    class: "",
    role: "student",
  },
  {
    path: "/attendance",
    title: "Attendance",
    icon: "ni-circle-08 text-pink",
    class: "",
    role: "lecturer",
  },
  {
    path: "/view-attendance",
    title: "View attendance",
    icon: "ni-circle-08 text-pink",
    class: "",
    role: "lecturer",
  },
  {
    path: "/quiz",
    title: "Quiz",
    icon: "ni-circle-08 text-pink",
    class: "",
    role: "lecturer",
  },
  {
    path: "/answer-quiz",
    title: "answer",
    icon: "ni-circle-08 text-pink",
    class: "",
    role: "lecturer",
  },
  {
    path: "/studentAnswerQuiz",
    title: "Answer Quiz",
    icon: "ni-circle-08 text-pink",
    class: "",
    role: "lecturer",
  },
  {
    path: "/studentAnswers",
    title: "Student Answers",
    icon: "ni-circle-08 text-pink",
    class: "",
    role: "lecturer",
  },
  // { path: "/icons", title: "Icons", icon: "ni-planet text-blue", class: "", role: ""},
  // { path: "/maps", title: "Maps", icon: "ni-pin-3 text-orange", class: "", role: "" },
  // {
  //   path: "/user-profile",
  //   title: "User profile",
  //   icon: "ni-single-02 text-yellow",
  //   class: "",
  //   role: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Tables",
  //   icon: "ni-bullet-list-67 text-red",
  //   class: "",
  //   role: ""
  // },
  // { path: "/login", title: "Login", icon: "ni-key-25 text-info", class: "" },
  // {
  //   path: "/register",
  //   title: "Register",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  user: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.menuItems=ROUTES;

    // if (this.user.isLecturer) {
    //   this.menuItems = ROUTES.filter(
    //     (menuItem) => menuItem.role == "lecturer" || menuItem.role == ""
    //   );
    // } else {
    //   this.menuItems = ROUTES.filter(
    //     (menuItem) => menuItem.role == "student" || menuItem.role == ""
    //   );
    // }

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
