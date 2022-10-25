import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerquestionsComponent } from './answerquestions.component';

describe('AnswerquestionsComponent', () => {
  let component: AnswerquestionsComponent;
  let fixture: ComponentFixture<AnswerquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
