import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrequentlyAskedQuestionsService {

  constructor(private _http: HttpClient) {}

  getQuetionsData(): Observable<any> {
    return this._http.get('http://localhost:9000/getQuestions', {
      observe: 'response',
    });
  }
}
