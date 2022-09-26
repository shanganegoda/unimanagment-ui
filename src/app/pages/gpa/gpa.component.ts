import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {
  year: any = ['1st Year','2nd Year','3rd Year','4th Year']
  constructor(public fb: FormBuilder) { }
  yearForm = this.fb.group({
    name : [''],
  })
  
  onSubmit() {
    alert(JSON.stringify(this.yearForm.value))
  }

  ngOnInit(): void {
  }

}
