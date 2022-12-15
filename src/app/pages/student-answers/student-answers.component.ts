import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ComponentsModule } from 'src/app/components/components.module';
import { Student } from 'src/app/Models/student.model';

@Component({
  selector: 'app-student-answers',
  templateUrl: './student-answers.component.html',
  styleUrls: ['./student-answers.component.scss']
})
export class StudentAnswersComponent implements OnInit {
  studentquizess: any = {};
  students: any[] = []

  quizzes: any = {}
  quizId: any
  questions: any = {}
  studentQuestion: Array<Student> = new Array<Student>();
  studentIds: any = [];

  constructor(public api: ApiService, public router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId")

    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res
    })
    this.getStudentQuestionsByQuizId();
  }
  getQuestionList(quizId) {
    this.router.navigateByUrl(`/studentAnswerQuestions/${quizId}`)
    console.log(quizId)
  }
  getAnswers(): void {
    this.api.GetStudentQuestions(1, this.quizId).subscribe(q => {
      this.studentquizess = q;
      console.log(q);
    })
  }
  getStudentQuestionsByQuizId() {
    this.api.GetStudentQuestionsByQuizId(this.quizId).subscribe((res) => {
      this.studentIds = res;
      console.log(this.studentIds);
      this.getStudentById(this.studentIds)
    })
  }

  getStudentById(StudentIds) {
    StudentIds.forEach(element => {
      this.api.GetStudent(element.studentId).subscribe((q) => {
        this.studentquizess = q;
        this.students.push(this.studentquizess);
        console.log(this.students);
      }
      )
    });
  }

  getQuestionPaper(studentId) {
    this.router.navigateByUrl(`/studentAnswerQuestions/${this.quizId}/${studentId}`)
  }
}
