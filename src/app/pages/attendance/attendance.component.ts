import { identifierName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeService } from 'ngx-scanner-qrcode';
import { AttendanceService } from './attendance.service';

interface Student {
  studentName: string;
  studentId: string;
  subjectId: string;
  date: string;
  time: string;
}



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})

export class AttendanceComponent implements OnInit {
  subjectCode: string;
  subjectCodeBool: boolean;
  getQr: string;
  qrCodeData: any;
  student: Student;
  students: Student[] = [];
  setStud = new Set();
  public output: string;
  currentDate = new Date();
  timestamp = this.currentDate.getTime();
  date
  displayView: boolean = false;
  attendanceDate: string



  constructor(private qrcode: NgxScannerQrcodeService,
    private attendanceService: AttendanceService,
    private router: Router) { }


  ngOnInit(): void {
    if (this.router.url.includes("view-attendance")) {
      this.displayView = true;
      this.subjectCodeBool = true;
      // this.attendanceService.get().subscribe((res: any) => {
      //   this.students = res;
      //   this.student = {
      //     studentName: "",
      //     studentId: "",
      //     subjectId: "",
      //     date: "",
      //     time: ""
      //   };
      // })
    }
  }

  test(data: any) {
    console.log('inside test - ', data)
    this.student = JSON.parse(data)
    let date = new Date();
    this.student.date = date.toLocaleDateString()
    this.student.time = date.toLocaleTimeString()
    let existingStudents = this.students.filter(s => s.studentId == this.student.studentId);
    if (!(existingStudents.length > 0)) {
      this.students.push(this.student)
    }
    this.student.subjectId = this.subjectCode


  }



  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) => console.log(fn + ': ' + res));
    //console.log(action.data.value)
    this.student = JSON.parse(action.data.value)
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  save() {
    let studentModel: Student = {
      studentName: this.student.studentName,
      studentId: this.student.studentId,
      subjectId: this.subjectCode,
      date: this.student.date,
      time: this.student.time
    };


    this.attendanceService.post(this.students).subscribe(res => {
      console.log(res)
    })

  }



  subjectCodeNext() {
    this.subjectCodeBool = true;
    if (this.router.url.includes("view-attendance")) {
      this.attendanceService.getAttendances(this.subjectCode, this.attendanceDate).subscribe((res: any) => {
        this.students = res;
        this.student = {
          studentName: "",
          studentId: "",
          subjectId: "",
          date: "",
          time: ""
        };  //to make the condition (student?) for html true 
      })
    }

  }
}
