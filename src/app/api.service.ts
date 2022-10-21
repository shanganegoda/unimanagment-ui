import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    question: any = {}
    quiz: any = {}
    quizId : any

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) { }
    post(question) {
        this.http.post("https://localhost:5001/api/questions", question).subscribe(res => {
            console.log(res)
        });
    }

    getQuestions(quizId){
        return this.http.get(`https://localhost:5001/api/questions/${quizId}`)
    }

    selectQuestion(question){
        this.selectedQuestion.next(question)
        console.log(this.questionSelected)
    }

    selectQuiz(quiz){
        this.selectedQuiz.next(quiz)
        console.log(this.quizSelected)
    }

    putQuestion(question){
        this.http.put(`https://localhost:5001/api/questions/${question.id}`,question).subscribe(res =>{
            console.log(res)
        })
    }

    getQuiz(){
        return this.http.get("https://localhost:5001/api/Quizzes")
    }

    postQuiz(quiz){
        this.http.post("https://localhost:5001/api/Quizzes",quiz).subscribe(res => {
            console.log(res)
        });
    }

    putQuiz(quiz){
        this.http.put(`https://localhost:5001/api/Quizzes/${quiz.id}`,quiz).subscribe(res=> {
            console.log(res)
        })
    }
}