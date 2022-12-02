import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  get(studentId) {
    return this.http.get(`${environment.base}Users/${studentId}`);
  }

  login(model) {
    return this.http.post(`${environment.base}Users/Login`, model);
  }

  post(model) {
    return this.http.post(`${environment.base}Users`, model);
  }
}
