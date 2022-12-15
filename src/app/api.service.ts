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
    return this.http.post(`${environment.base}questions`, question);
  }

  getQuestions(quizId) {
    return this.http.get(`${environment.base}questions/${quizId}`);
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

  putQuestion(question) {
    return this.http.put(
      `${environment.base}questions/${question.id}`,
      question
    );
  }

  deleteQuestion(questionId) {
    return this.http.delete(`${environment.base}questions/${questionId}`);
  }

  getQuiz() {
    return this.http.get(`${environment.base}Quizzes`);
  }

  postQuiz(quiz) {
    return this.http.post(`${environment.base}Quizzes`, quiz);
  }

  putQuiz(quiz) {
    return this.http.put(`${environment.base}Quizzes/${quiz.id}`, quiz);
  }

  deleteQuiz(quizId) {
    return this.http.delete(`${environment.base}Quizzes/${quizId}`);
  }
  getStudentById(studentId) {
    this.http
      .get(`${environment.base}Students/${studentId}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
  getAnswerQuesstions() {
    this.http.get(`${environment.base}StudentQuestions`).subscribe((res) => {
      console.log(res);
    });
  }

  postStudentQuestions(StudentQuestion) {
    return this.http.post(
      `${environment.base}StudentQuestions`,
      StudentQuestion
    );
  }
  GetStudentQuestions(studentId: number, quizId: number) {
    return this.http.get(
      `${environment.base}StudentQuestions/quiz/${studentId}/${quizId}`
    );
  }
  GetStudentQuestionsByQuizId(quizId: number) {
    return this.http.get(`${environment.base}StudentQuestions/quiz/${quizId}`);
  }
  GetStudent(studentId: number) {
    return this.http.get(`${environment.base}Students/${studentId}`);
  }
  GetStudentResults(studentId: number, quizId: number) {
    return this.http.get(
      `${environment.base}StudentQuestions/results/${studentId}/${quizId}`
    );
  }
}
