import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions.component';

describe('FrequentlyAskedQuestionsComponent', () => {
  let component: FrequentlyAskedQuestionsComponent;
  let fixture: ComponentFixture<FrequentlyAskedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentlyAskedQuestionsComponent ],
      imports: [BrowserModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentlyAskedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title 'HAVE A QUESTION? WE CAN HELP'`, () => {
    const fixture = TestBed.createComponent(FrequentlyAskedQuestionsComponent);
    const app = fixture.componentInstance;
    expect(app.header).toEqual('HAVE A QUESTION? WE CAN HELP');
  });
});
