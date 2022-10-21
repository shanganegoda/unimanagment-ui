import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ShowquestionsComponent } from '../showquestions/showquestions.component';
//import { QuiznavComponent } from '../quiznav/quiznav.component';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  question : any = {
    text: ""
  }

  quizId : any


  
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId")
    console.log(this.quizId)
    this.api.questionSelected.subscribe(question => this.question = question) 
    console.log(this.question)
  }

         
  post(question){
    question.quizId = this.quizId
    this.api.post(question)
  }

  put(question){
    this.api.putQuestion(question)
  }


}
