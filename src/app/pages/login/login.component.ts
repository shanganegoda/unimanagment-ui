import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterService } from "../register/register.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;

  constructor(private service: RegisterService, private route: Router) {}

  ngOnInit() {}
  ngOnDestroy() {}

  login() {
    return this.service
      .login({ email: this.email, password: this.password })
      .subscribe((response: any) => {
        if (response?.id) {
          localStorage.setItem("user", JSON.stringify(response));
          var retrievedObject = localStorage.getItem("user");
          // console.log("retrievedObject: ", JSON.parse(retrievedObject));
          this.route.navigateByUrl("/dashboard");
        }
      });
  }
}
