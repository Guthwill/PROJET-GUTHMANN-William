import { RemoveArticle } from '../../shared/actions/panier.action';
import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Article } from 'src/shared/models/article';
import { PanierState } from 'src/shared/states/panier-state';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  total!: number;

  panierElements$!: Observable<Article[]>;

  constructor(private articleService: ArticleService,
    private store: Store) { }

  ngOnInit(): void {
    this.panierElements$ = this.store.select(state => state.panier.panier);
  }

  delReference(ref: string) {
    // À corriger : il supprime tous les articles avec la ref, il faut supp par rapport à l'index dans la liste
    this.store.dispatch(new RemoveArticle(ref));
  }

  totalPrice(panier: any){
    for(let element of panier){
      this.total += Number(element.price);
      console.log(this.total);
    }
    return this.total;
  }
}
