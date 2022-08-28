import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrequentlyAskedQuestionsModule } from './pages/frequently-asked-questions/frequently-asked-questions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrequentlyAskedQuestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
