import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnsweredQuestionsComponent } from './student-answered-questions.component';

describe('StudentAnsweredQuestionsComponent', () => {
  let component: StudentAnsweredQuestionsComponent;
  let fixture: ComponentFixture<StudentAnsweredQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAnsweredQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAnsweredQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
