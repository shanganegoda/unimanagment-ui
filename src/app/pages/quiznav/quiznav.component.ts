import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiznav',
  templateUrl: './quiznav.component.html',
  styleUrls: ['./quiznav.component.scss']
})
export class QuiznavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  routeQuiz(){
     this.route.navigateByUrl("/quiz")
  }

  routeQlist(){
    this.route.navigateByUrl("/questionlist")
  }

}
