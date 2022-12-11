import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student-answers',
  templateUrl: './student-answers.component.html',
  styleUrls: ['./student-answers.component.scss']
})
export class StudentAnswersComponent implements OnInit {

  quizzes : any = {}
  constructor(public api: ApiService , public router: Router) { }
  ngOnInit(): void {
    this.api.getQuiz().subscribe(q => {
      this.quizzes = q
    })
  }
  getQuestionList(quizId){
    this.router.navigateByUrl(`/studentAnswerQuestions/${quizId}`)
    console.log(quizId)
  }


}
