import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface WikiArticle {
  title: string;
  extract: string;
  content_urls?: {
    desktop: {
      page: string;
    }
  }
}

export interface WikiResponse {
  pages: WikiArticle[];
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  private http = inject(HttpClient);

  getArticles(topic: string): Observable<any> {
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + topic;
    return this.http.get<any>(url).pipe(
      catchError(() => of(null))
    );
  }
}