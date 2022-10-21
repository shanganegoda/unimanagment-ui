import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-showquestions',
  templateUrl: './showquestions.component.html',
  styleUrls: ['./showquestions.component.scss']
})
export class ShowquestionsComponent implements OnInit {

  questions :any 
  quizId : any

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId")
    this.api.getQuestions(this.quizId).subscribe(res =>{
     this.questions = res
    });
  }

}
