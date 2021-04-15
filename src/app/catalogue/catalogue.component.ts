import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, from, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { FormControl } from '@angular/forms';
import { ArticleService } from '../service/article.service';
import { Article } from 'src/shared/models/article';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {

  articles$!: Article[];

  articleSubscription!: Subscription;

  searchText: string = "";

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleSubscription = this.articleService.articleSubject.subscribe(
      (articles: Article[]) => {
        this.articles$! = articles;
      }
    );
    this.articleService.emitArticleSubject();
  }
}
