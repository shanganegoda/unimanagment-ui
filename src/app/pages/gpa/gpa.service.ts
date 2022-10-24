import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GpaService {
  constructor(private http: HttpClient) {}

  get(studentId) {
    return this.http.get(`${environment.base}GPASubjects/${studentId}`);
  }

  post(model) {
    return this.http.post(`${environment.base}GPASubjects`, model);
  }
}
