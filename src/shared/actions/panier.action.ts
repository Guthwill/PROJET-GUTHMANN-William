import { Article } from '../models/article';

export class AddArticle {
  static readonly type = "[Article] Add";

  constructor(public payload: Article) {}
}

export class RemoveArticle {
  static readonly type = "[Article] Remove";

  // constructor(public payload: Article) {}
  constructor(public payload: string) {}
}
