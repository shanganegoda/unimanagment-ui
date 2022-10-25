import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerquizComponent } from './answerquiz.component';

describe('AnswerquizComponent', () => {
  let component: AnswerquizComponent;
  let fixture: ComponentFixture<AnswerquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
