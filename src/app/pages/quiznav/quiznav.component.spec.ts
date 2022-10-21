import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiznavComponent } from './quiznav.component';

describe('QuiznavComponent', () => {
  let component: QuiznavComponent;
  let fixture: ComponentFixture<QuiznavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiznavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiznavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
