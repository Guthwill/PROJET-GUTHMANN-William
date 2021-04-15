import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service'

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})

export class DetailArticleComponent implements OnInit {

  // name: string = "";
  // price: number = 0;
  articleName = new String();
  articlePrice = new Number();

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const articleRef = this.route.snapshot.params['ref'];
    this.articleName = String(this.articleService.getArticleByRef(articleRef)?.name);
    this.articlePrice = Number(this.articleService.getArticleByRef(articleRef)?.price);
  }
}
