import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articleRef!: string;
  @Input() articleName!: string;
  @Input() articlePrice!: number;

  constructor() { }

  ngOnInit(): void {
  }
}
