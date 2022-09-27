import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {
  combination: string="";
  selectedAcYearId: string="";
  selectedComb: string ="";

  acYearIdDetails = [
    {
      acYearId: 1,
      acYear: "1st Year",
    },
    {
      acYearId: 2,
      acYear: "2nd Year",
    },
    {
      acYearId: 3,
      acYear: "3rd Year",
    },
    {
      acYearId: 4,
      acYear: "4th Year",
    }
  ]

  combDetails = [
    {
      combId:1,
      combName:"1st combination (CMIS/ELTN)"
    },
    {
      combId:2,
      combName:"2nd combination (CMIS/IMGT)"
    },
    {
      combId:3,
      combName:"3rd combination (ELTN/IMGT)"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
