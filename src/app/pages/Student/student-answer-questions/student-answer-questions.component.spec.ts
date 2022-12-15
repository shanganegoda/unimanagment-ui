import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnswerQuestionsComponent } from './student-answer-questions.component';

describe('StudentAnswerQuestionsComponent', () => {
  let component: StudentAnswerQuestionsComponent;
  let fixture: ComponentFixture<StudentAnswerQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAnswerQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAnswerQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
