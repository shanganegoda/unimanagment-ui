import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


interface Subs {
  code: String;
  name: String;
  level: String;
  program: String;
  combination: String;
  credit: number,
  grade: String;
}

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})

export class GpaComponent implements OnInit {
  @ViewChild('target') myDivRef: ElementRef;
  url: string = "/assets/data.json"
  gpaCredit : number;
  totalCredit : number;
  finalGpa: number;
  public tempSubs: Subs[] = [];
  public subjects: Subs[] = [];
  selectedAcYearId: string = "";
  selectedComb: string = "";
  selectedDegProg: string = "";
  showGpa: boolean = false;

  grade = [
    "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E", "I"
  ]

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
      combId: 1,
      combName: "1st combination (CMIS/ELTN)"
    },
    {
      combId: 2,
      combName: "2nd combination (ELTN/IMGT)"
    },
    {
      combId: 3,
      combName: "3rd combination (IMGT/CMIS)"
    }
  ]

  degProgDetails = [
    {
      progId: 1,
      progName: "3-Year B.Sc. (General) Degree"
    },
    {
      progId: 2,
      progName: "4-Year B.Sc. (Joint Major) Degree"
    },
    {
      progId: 3,
      progName: " 4-Year B.Sc. (Special) Degree"
    }

  ]

  constructor(private http: HttpClient) { 
    
  }

  public ngOnInit(): void {
    
    
   
  }

  onOptionsSelected(){
    
    // this.http.get(this.url).subscribe((response: any) => {
    //   let getSubjects = JSON.parse(JSON.stringify(response.subjects));
    //   if(this.selectedAcYearId=="1"){
    //   this.subjects=[];
    //   getSubjects.forEach(element => {
    //     if(element.level=="1"){
    //      this.subjects.push(element);
         
    //     }
        
    //   });
    //  }else{
    //   this.subjects=[];
    //   getSubjects.forEach(element => {
    //     if(element.level=="2"){
    //       this.subjects.push(element);
    //     }
    //   });
    //  }
    //   console.log(this.subjects)
    // });
    this.subjects = [];
    console.log(this.tempSubs,this.selectedComb,this.selectedAcYearId)

    this.tempSubs.forEach(element => {
      if(this.selectedComb=="1"){
        if(element.combination == "C" || element.combination == "E"){
          this.subjects.push(element)
        }
      } else if(this.selectedComb=="2"){
        if(element.combination=="E" || element.combination == "I"){
          this.subjects.push(element)
        }
      } else{
        if(element.combination=="C" || element.combination == "I"){
          this.subjects.push(element)
      }
    }
  
    })
}


onAcademicYearSelected() {
   this.subjects=[];
   this.tempSubs=[];
   this.http.get(this.url).subscribe((response: any) =>{
    let getSubjects = JSON.parse(JSON.stringify(response.subjects));
    if(this.selectedAcYearId=="1"){ 
      getSubjects.forEach(element => {
        if(element.level=="1"){
        this.tempSubs.push(element);
        } 
      });
     } else {
      getSubjects.forEach(element => {
        this.tempSubs.push(element);
      });
     }
   });
  
}

onNext(){
  this.finalGpa=0;
  this.gpaCredit=0;
  this.totalCredit=0;
  console.log(this.subjects)
  this.subjects.forEach(element => {
    // if(element.grade == "A+"){
    //   this.gpaCredit = this.gpaCredit + 4*element.credit
    // } 

    switch(element.grade){
      
      case "A+":
        this.gpaCredit = this.gpaCredit + 4*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "A":
        this.gpaCredit = this.gpaCredit + 4*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "A-":
        this.gpaCredit = this.gpaCredit + 3.7*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "B+":
        this.gpaCredit = this.gpaCredit + 3.3*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "B":
        this.gpaCredit = this.gpaCredit + 3.0*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "B-":
        this.gpaCredit = this.gpaCredit + 2.7*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "C+":
        this.gpaCredit = this.gpaCredit + 2.3*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;  
      case "C":
        this.gpaCredit = this.gpaCredit + 2.0*element.credit 
        this.totalCredit = this.totalCredit + element.credit  
        break;
      case "C-":
        this.gpaCredit = this.gpaCredit + 1.7*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "D+":
        this.gpaCredit = this.gpaCredit + 1.3*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;  
      case "D":
        this.gpaCredit = this.gpaCredit + 1*element.credit
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "E":
        this.gpaCredit = this.gpaCredit 
        this.totalCredit = this.totalCredit + element.credit
        break;
      case "I":
        this.gpaCredit = this.gpaCredit 
        this.totalCredit = this.totalCredit + element.credit
        break;
    }
    console.log("tot "+this.totalCredit)
    console.log("gpaCre "+this.gpaCredit)

  });
  this.finalGpa = this.gpaCredit/this.totalCredit
  this.showGpa = true;
}

  //  getSubs():void {
  //   if()

  // }

  scroll() {
    this.myDivRef.nativeElement.scrollIntoView();
  }

}
