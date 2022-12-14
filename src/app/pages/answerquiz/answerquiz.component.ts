import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-answerquiz',
  templateUrl: './answerquiz.component.html',
  styleUrls: ['./answerquiz.component.scss']
})
export class AnswerquizComponent implements OnInit {
  quizzes: any = {}

  student: any = {}
  studentquizess: any = {}
  isStudentAttemptedQuiz: boolean = false;
  constructor(public api: ApiService, public router: Router) { }

  ngOnInit(): void {
    this.student = JSON.parse(localStorage.getItem("user"));

    this.api.getQuiz().subscribe(q => {
      this.quizzes = q
    })
  }

  getQuestionList(quizId) {
    this.router.navigateByUrl(`/question/${quizId}`)
    console.log(quizId)
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  getAnswers(quizId): void {

  }


}
