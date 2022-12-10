import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student-answer-quiz',
  templateUrl: './student-answer-quiz.component.html',
  styleUrls: ['./student-answer-quiz.component.scss']
})
export class StudentAnswerQuizComponent implements OnInit {

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
