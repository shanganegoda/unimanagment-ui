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
  studentQuestion: Array<StudentQuestion> = new Array<StudentQuestion>();
  quizId: any
  isSubmitDisabled: boolean = false;
  questions: any = {}
  user: any;
  student: any = {}
  studentquizess: any = {}
  questionCount: any = {}
  correctAnswers: any = {}
  studentMarks: any = {}
  isStudentAttemptedQuiz: boolean = false;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.student = JSON.parse(localStorage.getItem("user"));
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    this.isSubmitDisabled = false;
    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res
      this.questionCount = this.questions.length;
    })
    this.getAnswers();
  }
  getAnswers(): void {
    this.api.GetStudentQuestions(this.student.id, this.quizId).subscribe(q => {
      this.studentquizess = q;
      if (this.studentquizess.length > 0) {
        this.isStudentAttemptedQuiz = true;
      }
      console.log(this.isStudentAttemptedQuiz);
    })
  }

  setradio(e: string, a: number, answerText: string, isCorrectAnswer: boolean): void {

    var isRecorded = this.studentQuestion.find(x => x.QuestionId == parseInt(e))
    if (isRecorded != null) {
      this.studentQuestion = this.studentQuestion.filter(obj => obj !== isRecorded);
    }
    this.user = JSON.parse(localStorage.getItem("user"));

    console.log(this.user);
    let studentQuestion = new StudentQuestion();
    studentQuestion.QuizId = this.quizId;
    studentQuestion.AnswerText = answerText;
    studentQuestion.IsCorrectAnswer = isCorrectAnswer;
    studentQuestion.QuestionId = parseInt(e);
    studentQuestion.StudentId = this.student.id;
    console.log("Answer" + answerText);
    this.studentQuestion.push(studentQuestion)
  }
  saveAnswers() {
    this.api.postStudentQuestions(this.studentQuestion)
    this.isSubmitDisabled = true;
    this.getStudentMarks();
  }
  post(question) {
    question.quizId = this.quizId
  }
  getStudentMarks(): void {
    this.questionCount = this.questions.length;
    this.correctAnswers = this.studentQuestion.filter(x => x.IsCorrectAnswer == true);
    this.studentMarks = Math.floor(this.correctAnswers.length / this.questionCount * 100);
  }

}
