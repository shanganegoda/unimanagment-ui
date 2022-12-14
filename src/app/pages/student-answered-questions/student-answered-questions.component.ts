import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student-answered-questions',
  templateUrl: './student-answered-questions.component.html',
  styleUrls: ['./student-answered-questions.component.scss']
})
export class StudentAnsweredQuestionsComponent implements OnInit {

  constructor(public api: ApiService, public router: Router, private route: ActivatedRoute) { }
  studentquizess: any = {};
  quizId: any
  studentId: any
  questions: any = {}
  CorrectAnswers: any = {}
  QuestionCount: any = {}
  studentMarks: any = {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    this.studentId = this.route.snapshot.paramMap.get("studentId")

    this.getAnswers()

  }


  getAnswers(): void {
    this.api.GetStudentResults(this.studentId, this.quizId).subscribe((q) => {
      this.questions = q;
      this.QuestionCount = this.questions.length;
      this.CorrectAnswers = this.questions.filter(x => x.isCorrectAnswer == true);
      this.studentMarks = Math.floor(this.CorrectAnswers.length / this.QuestionCount * 100);
    })
  }


}
