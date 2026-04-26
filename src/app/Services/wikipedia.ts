import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { WikiArticle } from '../models/wiki-article';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  private http = inject(HttpClient);

  getArticles(topic: string): Observable<any> {
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + topic;
    return this.http.get<WikiArticle>(url).pipe(
      catchError(() => of(null))
    );
  }
}