import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/models/question';
import { FrequentlyAskedQuestionsService } from './frequently-asked-questions.service';

@Component({
  selector: 'dl-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.scss']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {
  collapse = false;
  subscriptions: Subscription[] = [];
  questionsAndAnswers!: Question[];
  constructor(private _faqService: FrequentlyAskedQuestionsService) {}

  ngOnInit(): void {
    const sub = this._faqService.getQuetionsData().subscribe({
      next: (res) => {
        this.questionsAndAnswers = [...res.body] || [];
        console.log(this.questionsAndAnswers);
      },
      error: (err) => {
        console.error(err);
      },
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
