import { Routes } from '@angular/router';
import { QuiznavComponent } from '../quiznav/quiznav.component';



import { ShowquestionsComponent } from 'src/app/pages/showquestions/showquestions.component';

export const AdminLayoutRoutes: Routes = [  
    { path: 'questionlist', component:ShowquestionsComponent}
];
