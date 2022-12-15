import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-fullquiz",
  templateUrl: "./fullquiz.component.html",
  styleUrls: ["./fullquiz.component.scss"],
})
export class FullquizComponent implements OnInit {
  quiz: any = {};
  quizzes: any = {};
  isListView: boolean = true;
  isEditMode: boolean = false;

  constructor(public api: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.loadQuiz();

    this.api.quizSelected.subscribe((quiz) => {
      this.quiz = quiz;
      console.log(this.quiz);
    });
  }

  loadQuiz() {
    this.api.getQuiz().subscribe((res) => {
      this.quizzes = res;
      this.quiz = {};
    });
  }

  save(quiz) {
    if (quiz.title == "" || quiz.title == null) {
      return;
    }
    if (this.isEditMode) {
      this.putQuiz(quiz);
    } else {
      this.postQuiz(quiz);
    }
  }

  postQuiz(quiz) {
    this.api.postQuiz(quiz).subscribe((res) => {
      this.loadQuiz();
      this.isListView = true;
      this.isEditMode = false;
    });
  }

  putQuiz(quiz) {
    this.api.putQuiz(quiz).subscribe((res) => {
      this.loadQuiz();
      this.isListView = true;
      this.isEditMode = false;
    });
  }

  deleteQuiz(quizId) {
    this.api.deleteQuiz(quizId).subscribe((res) => {
      this.loadQuiz();
    });
  }

  getQuestionList(quizId) {
    this.router.navigateByUrl(`/question/${quizId}`);
    console.log(quizId);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  changeView() {
    this.isListView = !this.isListView;
  }

  editQuiz(quiz) {
    this.quiz = quiz;
    this.isEditMode = true;
    this.isListView = false;
  }
  viewQuizAnswers(quizId) {
    this.router.navigateByUrl(`/studentAnswers/${quizId}`);
    console.log(quizId);
  }
}
