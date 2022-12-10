import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnswerQuizComponent } from './student-answer-quiz.component';

describe('StudentAnswerQuizComponent', () => {
  let component: StudentAnswerQuizComponent;
  let fixture: ComponentFixture<StudentAnswerQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAnswerQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAnswerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
