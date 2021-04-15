import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FilterPipe } from './catalogue/filter.pipe';
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './service/article.service';
import { PanierState } from '../shared/states/panier-state';
import { BtnAddPanierComponent } from './btn-add-panier/btn-add-panier.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {AuthGuardGuard } from './auth-guard.guard';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: CatalogueComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'catalogue', component: CatalogueComponent, canActivate: [AuthGuardGuard]},
  { path: 'catalogue/:ref', component: DetailArticleComponent, canActivate: [AuthGuardGuard] },
  { path: 'panier', component: PanierComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    HeaderComponent,
    FormulaireComponent,
    FilterPipe,
    PanierComponent,
    HomeComponent,
    ArticleComponent,
    BtnAddPanierComponent,
    DetailArticleComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([PanierState])
  ],
  providers: [
    ArticleService,
    [AuthGuardGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
