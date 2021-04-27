import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article } from '../../shared/models/article'

@Injectable({providedIn: 'root'})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  articleSubject = new Subject<Article[]>();

  articles: Article[] = [
    {
      ref: "Y2LWP95M",
      name: "Linux",
      price: 10
    },
    {
      ref: "M75CEPTK",
      name: "Windows",
      price: 15
    },
    {
      ref: "75FGMDCX",
      name: "Angular",
      price: 5
    },
    {
      ref: "SX9BG46C",
      name: "Talend",
      price: 0
    },
  ];

  public getArticles(): Observable<any> {
    console.log(this.httpClient.get<any>(environment.baseUrl+'/api/catalogue'));
    return this.httpClient.get<any>(environment.baseUrl+'/api/catalogue');
  }

  emitArticleSubject() {
    this.articleSubject.next(this.articles.slice());
  }

  getArticleByRef(ref: string) {
    const article = this.articles.find(
      (articleObject) => {
        return articleObject.ref === ref;
      }
    );

    return article;
  }
}
