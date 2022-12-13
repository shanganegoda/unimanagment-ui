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

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    this.studentId = this.route.snapshot.paramMap.get("studentId")
    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res
    })
    this.getAnswers();
    //this.assignCorrectAnswers();
  }

  getAnswers(): void {
    this.api.GetStudentQuestions(this.studentId, this.quizId).subscribe(q => {
      this.studentquizess = q;
      console.log(q);
    })
  }

  async assignCorrectAnswers() {
    this.questions.forEach(element => {
      var t = this.studentquizess.find(x => x.questionId == element.Id);
      console.log("assignCorrectAnswers" + t);


      //ToDo:assign questions[0].correctAnswer to studentquizess[0].AnswerID
      // In HTML bind [checked]="isChecked" to [checked]="question.correctAnswer==0",
      //1,2,3 so on 0,1,2,3 act as enum 0 means correct answer

    });
  }
}
