import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { ShowquestionsComponent } from "../showquestions/showquestions.component";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"],
})
export class QuizComponent implements OnInit {
  question: any = {
    text: "",
  };
  questions: any = [];
  quizId: any;
  isListView: boolean = true;
  isEditMode: boolean = false;
  // Defining the adding div of array type
  newDivs: addDivisions[] = [];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    console.log(this.quizId);
    this.api.questionSelected.subscribe(
      (question) => (this.question = question)
    );
    this.loadQuestions();
  }

  loadQuestions() {
    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;
      console.log(this.questions);
      this.question = {};
    });
  }

  save(question) {
    if (question.text == "" || question.text == null) {
      return;
    }
    if (this.isEditMode) {
      this.put(question);
    } else {
      this.post(question);
    }
  }

  post(question) {
    question.quizId = this.quizId;
    this.api.post(question).subscribe((res) => {
      this.loadQuestions();
      this.isListView = true;
      this.isEditMode = false;
    });
  }

  put(question) {
    this.api.putQuestion(question).subscribe((res) => {
      this.loadQuestions();
      this.isListView = true;
      this.isEditMode = false;
    });
  }

  changeView() {
    this.isListView = !this.isListView;
  }
  addfield() {
    console.log("function triggered");
    const div = this.renderer.createElement("div");
    const input = this.renderer.createElement("input");

    this.renderer.appendChild(div, input);

    this.renderer.addClass(div, "col-md-6");
    this.renderer.addClass(div, "col-sm-6");
    this.renderer.addClass(div, "col-xs-12");

    console.log("cross passes the code");
    this.renderer.addClass(input, "form-control");
    this.renderer.addClass(input, "col-md-7");
    this.renderer.addClass(input, "col-xs-12");

    const textboxes = document.getElementById("textboxes");

    this.renderer.appendChild(textboxes, div);
  }

  // function for adding div
  addNewDiv() {
    this.newDivs.push(new addDivisions());
  }

  view() {}

  edit(question) {
    this.question = question;
    this.isEditMode = true;
    this.isListView = false;
  }

  delete(questionId) {
    this.api.deleteQuestion(questionId).subscribe((res) => {
      this.loadQuestions();
    });
  }
}

// Here you can define the elements
export class addDivisions {}
