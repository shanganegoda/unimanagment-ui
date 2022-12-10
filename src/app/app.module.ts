import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { GpaComponent } from './pages/gpa/gpa.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ShowquestionsComponent } from './pages/showquestions/showquestions.component';
import { QuiznavComponent } from './pages/quiznav/quiznav.component';
import { FullquizComponent } from './pages/fullquiz/fullquiz.component';
import { AnswerquizComponent } from './pages/answerquiz/answerquiz.component';
import { AnswerquestionsComponent } from './pages/answerquestions/answerquestions.component';
import { StudentAnswerQuestionsComponent } from './pages/Student/student-answer-questions/student-answer-questions.component';
import { StudentAnswerQuizComponent } from './pages/Student/student-answer-quiz/student-answer-quiz.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxScannerQrcodeModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    GpaComponent,
    QuizComponent,
    AttendanceComponent,
    ShowquestionsComponent,
    QuiznavComponent,
    FullquizComponent,
    AnswerquizComponent,
    AnswerquestionsComponent,
        StudentAnswerQuestionsComponent,
    StudentAnswerQuizComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
