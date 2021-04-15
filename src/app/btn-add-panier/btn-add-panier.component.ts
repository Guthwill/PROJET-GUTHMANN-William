import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddArticle } from '../../shared/actions/panier.action';

@Component({
  selector: 'app-btn-add-panier',
  templateUrl: './btn-add-panier.component.html',
  styleUrls: ['./btn-add-panier.component.css']
})
export class BtnAddPanierComponent implements OnInit {

  @Input() articleRef!: string;
  @Input() articleName!: string;
  @Input() articlePrice!: number;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addPanier(ref: string, name: string, price: number) {
    this.store.dispatch(new AddArticle({ref: this.articleRef, name: this.articleName, price: this.articlePrice}));
  }
}
