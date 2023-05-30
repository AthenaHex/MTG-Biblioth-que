import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// ___ les pipes
// ___ les composants
import { AppComponent } from './app.component';
// ___ le routage
import { RouterModule } from '@angular/router';

import { BoardCardsComponent } from './board-cards/board-cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BoardCardDetailComponent } from './board-card-detail/board-card-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    BoardCardsComponent,
    BoardCardDetailComponent,
    CardDetailComponent,
    MenuBurgerComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'list', component: BoardCardsComponent},
      // { path: 'comments', component: BoardOnlyCommentsComponent},
      // { path: 'contact', component: ContactComponent},
      { path: 'about', component: AboutComponent},
      { path: 'details/:number', component: BoardCardDetailComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
