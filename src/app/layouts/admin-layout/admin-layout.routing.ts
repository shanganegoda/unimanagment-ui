import { Routes } from "@angular/router";

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { GpaComponent } from 'src/app/pages/gpa/gpa.component';
import { AttendanceComponent } from 'src/app/pages/attendance/attendance.component';
import { QuizComponent } from 'src/app/pages/quiz/quiz.component';
import { ShowquestionsComponent } from 'src/app/pages/showquestions/showquestions.component';
import { FullquizComponent } from 'src/app/pages/fullquiz/fullquiz.component';
import { AnswerquizComponent } from 'src/app/pages/answerquiz/answerquiz.component';
import { StudentAnswerQuizComponent } from "src/app/pages/Student/student-answer-quiz/student-answer-quiz.component";
import { StudentAnswerQuestionsComponent } from "src/app/pages/Student/student-answer-questions/student-answer-questions.component";
import { StudentAnswersComponent } from "src/app/pages/student-answers/student-answers.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'gpa',            component: GpaComponent },
    { path: "view-results", component: GpaComponent },
    { path: 'attendance',     component:AttendanceComponent},
    { path: 'view-attendance',     component:AttendanceComponent},
    { path: 'question',           component:QuizComponent},
    { path: 'question/:quizId',           component:QuizComponent},
    { path: 'questionlist',   component:ShowquestionsComponent},
    { path: 'quiz',            component:FullquizComponent},
    { path: 'answer-quiz',            component:AnswerquizComponent},
    { path: 'studentAnswerQuiz',            component:StudentAnswerQuizComponent},
    { path: 'studentAnswerQuestions/:quizId',            component:StudentAnswerQuestionsComponent},
    { path: 'studentAnswers',            component:StudentAnswersComponent}


];
