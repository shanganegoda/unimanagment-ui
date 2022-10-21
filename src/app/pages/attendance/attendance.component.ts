import { identifierName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeService } from 'ngx-scanner-qrcode';

interface Student{
  name:string;
  index:string;
  time:string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})

export class AttendanceComponent implements OnInit {
  getQr: string;
  qrCodeData: any;
  student: Student;
  students: Student[]=[];
  setStud = new Set();
  public output: string;
  currentDate = new Date();
  timestamp = this.currentDate.getTime();
 

  constructor(private qrcode: NgxScannerQrcodeService) { }
  

  ngOnInit(): void {
  }

  test(data: any){
    console.log('inside test - ',data)
    let student  = JSON.parse(data)
    let existingStudents = this.students.filter(s => s.index == student.index);
    if(!(existingStudents.length>0)){
      this.students.push(student)
    }
    
   
  }

 

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) =>  console.log(fn + ': ' + res));
    //console.log(action.data.value)
    this.student = JSON.parse(action.data.value)
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  getAllAttend(){
     
  }

}
