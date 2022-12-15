import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student-answer-quiz',
  templateUrl: './student-answer-quiz.component.html',
  styleUrls: ['./student-answer-quiz.component.scss']
})
export class StudentAnswerQuizComponent implements OnInit {
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
    this.api.GetStudentQuestions(this.student.id, quizId).subscribe(q => {
      this.studentquizess = q;
      if (this.studentquizess.length > 0) {
        this.router.navigateByUrl(`/studentAnswerQuestions/${quizId}/${this.student.id}`)
      }
      else {
        this.router.navigateByUrl(`/studentAnswerQuestions/${quizId}`)
      }
      console.log(this.isStudentAttemptedQuiz);
    })
    console.log(quizId)
  }

}
