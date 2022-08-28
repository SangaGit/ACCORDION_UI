import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions.component';
import { AccordionModule } from 'dl-widgets';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FrequentlyAskedQuestionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AccordionModule
  ],
  exports: [FrequentlyAskedQuestionsComponent]
})
export class FrequentlyAskedQuestionsModule { }
