import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-fullquiz',
  templateUrl: './fullquiz.component.html',
  styleUrls: ['./fullquiz.component.scss']
})
export class FullquizComponent implements OnInit {
  quiz: any = {}
  quizzes: any = {}
  constructor(public api : ApiService, public router : Router) { }

  ngOnInit(): void { 
      this.api.getQuiz().subscribe(res => {
        this.quizzes = res
      })

      this.api.quizSelected.subscribe(quiz =>{
        this.quiz = quiz
        console.log(this.quiz)
      })
  }

  

  postQuiz(quiz){
    this.api.postQuiz(quiz)
  }

  putQuiz(quiz){
    this.api.putQuiz(quiz)
  }

  getQuestionList(quizId){
    this.router.navigateByUrl(`/question/${quizId}`)
    console.log(quizId)
  }

  scrollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
  


}
