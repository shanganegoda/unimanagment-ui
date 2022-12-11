import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  question: any = {};
  quiz: any = {};
  quizId: any;

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) {}
  post(question) {
    this.http
      .post(`${environment.base}questions`, question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getQuestions(quizId) {
    return this.http.get(`${environment.base}questions/${quizId}`);
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
    console.log(this.questionSelected);
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
    console.log(this.quizSelected);
  }

  putQuestion(question) {
    this.http
      .put(`${environment.base}questions/${question.id}`, question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getQuiz() {
    return this.http.get(`${environment.base}Quizzes`);
  }

  postQuiz(quiz) {
    this.http.post(`${environment.base}Quizzes`, quiz).subscribe((res) => {
      console.log(res);
    });
  }

  putQuiz(quiz) {
    this.http
      .put(`${environment.base}Quizzes/${quiz.id}`, quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }
  getStudentById(studentId){
    this.http
    .get(`${environment.base}Students/${studentId}`)
    .subscribe((res) => {
      console.log(res);
    });
  }
  getAnswerQuesstions(){
    this.http
    .get(`${environment.base}StudentQuestions`)
    .subscribe((res) => {
      console.log(res);
    });
  }
  postStudentQuestions(StudentQuestion) {
    this.http.post(`${environment.base}StudentQuestions`, StudentQuestion).subscribe((res) => {
      console.log(res);
    });
  }
}
