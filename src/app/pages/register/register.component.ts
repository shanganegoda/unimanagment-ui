import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterService } from "./register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(private service: RegisterService, private route: Router) {}

  ngOnInit() {}

  register() {
    return this.service
      .post({ email: this.email, username: this.name, password: this.password })
      .subscribe((response: any) => {
        if (response?.id) this.route.navigateByUrl("/login");
      });
  }
}
