import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-student-answers',
  templateUrl: './student-answers.component.html',
  styleUrls: ['./student-answers.component.scss']
})
export class StudentAnswersComponent implements OnInit {
studentquizess:any={};
  quizzes : any = {}
  constructor(public api: ApiService , public router: Router) { }
  ngOnInit(): void {
    // this.api.getQuiz().subscribe(q => {
    //   this.quizzes = q
    // })
    this.getAnswers();
  }
  getQuestionList(quizId){
    this.router.navigateByUrl(`/studentAnswerQuestions/${quizId}`)
    console.log(quizId)
  }
getAnswers():void{
  this.api.GetStudentQuestions(1,1).subscribe(q=>{
    this.studentquizess=q;
console.log(q);  })
}
//question list->get questionbyid ->assign answers
}
