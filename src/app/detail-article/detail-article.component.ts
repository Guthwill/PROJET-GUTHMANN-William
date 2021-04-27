import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service'

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})

/*
 * Composant du détail d'un article lorsque l'on clique sur le lien détail
*/
export class DetailArticleComponent implements OnInit {

  articleRef!: string;
  articleName!: string;
  articlePrice!: number;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const articleRef = this.route.snapshot.params['ref'];
    this.articleName = String(this.articleService.getArticleByRef(articleRef)?.name);
    this.articlePrice = Number(this.articleService.getArticleByRef(articleRef)?.price);
    this.articleRef = articleRef;
  }
}
