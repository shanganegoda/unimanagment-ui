import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

//   get(studentId) {
//     return this.http.get(`${environment.base}GPASubjects/${studentId}`);
//   }
   
   get(){
    return this.http.get(`${environment.base}Attendances`);
   }

  post(model) {
    return this.http.post(`${environment.base}Attendances`, model);
  }

  getAttendances(subjectCode: string,date : string){
    const params = new HttpParams()
    .set('subjectCode', subjectCode)
    .set('date', date)
    date = date.replace("/","-")
    date = date.replace("/","-")
    subjectCode = subjectCode.replace(" ","")
    return this.http.get(`${environment.base}Attendances/${subjectCode}/${date}`)

  }
}
