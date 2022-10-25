import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-answerquestions',
  templateUrl: './answerquestions.component.html',
  styleUrls: ['./answerquestions.component.scss']
})
export class AnswerquestionsComponent implements OnInit {
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
