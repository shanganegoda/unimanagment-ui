import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { StudentQuestion } from 'src/app/Models/student-question.model';

@Component({
  selector: 'app-student-answer-questions',
  templateUrl: './student-answer-questions.component.html',
  styleUrls: ['./student-answer-questions.component.scss']
})
export class StudentAnswerQuestionsComponent implements OnInit {
  studentQuestion:Array<StudentQuestion>=new Array<StudentQuestion>();
  quizId : any
  questions : any = {}
  constructor(private api : ApiService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId")
    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res
    })
  }
  setradio(e: string,a:number): void   
  {  
    //if(this.studentQuestion.forEach){
//handle if already record exists
    //}
    let studentQuestion=new StudentQuestion();
    studentQuestion.QuizId=this.quizId;
    studentQuestion.AnswerId=a;
    studentQuestion.QuestionId=parseInt(e);
    studentQuestion.StudentId=1;  //ToDO:Get student Id currently all will save as 1

  this.studentQuestion.push(studentQuestion)
  } 
  saveAnswers(){
    this.api.postStudentQuestions(this.studentQuestion)
  }
  post(question){
    question.quizId = this.quizId
  }
}
