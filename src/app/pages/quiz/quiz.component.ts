import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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


  
  constructor(private api: ApiService, private route: ActivatedRoute,private renderer:Renderer2, private el: ElementRef) { }

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
  addfield()  {
    console.log('function triggered');
    const div = this.renderer.createElement('div');
    const input = this.renderer.createElement('input');

    this.renderer.appendChild(div, input);

    this.renderer.addClass(div, 'col-md-6');
    this.renderer.addClass(div, 'col-sm-6');
    this.renderer.addClass(div, 'col-xs-12');

    console.log('cross passes the code');
    this.renderer.addClass(input, 'form-control');
    this.renderer.addClass(input, 'col-md-7');
    this.renderer.addClass(input, 'col-xs-12');

    const textboxes = document.getElementById('textboxes');

    this.renderer.appendChild(textboxes, div);
  }
  // Defining the adding div of array type
newDivs: addDivisions[] = [];

// function for adding div
addNewDiv() {
this.newDivs.push(new addDivisions())
}



}
// Here you can define the elements
export class addDivisions {

}