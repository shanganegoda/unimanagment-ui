import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student-answer-questions',
  templateUrl: './student-answer-questions.component.html',
  styleUrls: ['./student-answer-questions.component.scss']
})
export class StudentAnswerQuestionsComponent implements OnInit {

  quizId : any
  questions : any = {}
  constructor(private api : ApiService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId")
    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res
    })
  }

}
