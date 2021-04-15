import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store'
import { AddArticle, RemoveArticle } from '../actions/panier.action'
import { Article } from '../models/article';
import { PanierStateModel } from './article-panier-model';

@State<PanierStateModel>(
  {
    name: 'panier',
    defaults: {
      panier: []
    }
  }
)

@Injectable()
export class PanierState {

  @Selector()
  static getArticles(state: PanierStateModel) {
    return state.panier;
  }

  @Selector()
  static getNbArticles(state: PanierStateModel) {
    return state.panier.length;
  }

  @Action(AddArticle)
  add(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: AddArticle) {
    const state = getState();
    console.log(payload);
    patchState({
      panier: [...state.panier, payload]
    });
  }

  // @Action(RemoveArticle)
  // del(
  //   { getState, patchState }: StateContext<PanierStateModel>,
  //   { payload }: RemoveArticle) {
  //   const state = getState();
  //   // TODO : Supprimer la référence passée en paramètre
  //   patchState({ panier: [...state.panier] });
  // }

  @Action(RemoveArticle)
  del(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: RemoveArticle) {
    patchState({
      panier: getState().panier.filter(x => x.ref != payload)
    });
  }
}
