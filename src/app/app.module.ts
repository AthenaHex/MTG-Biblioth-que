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




@NgModule({
  declarations: [
    AppComponent,
    BoardCardsComponent,
    BoardCardDetailComponent,
    CardDetailComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: ' ', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'restaurants-advice', pathMatch: 'full'},
    ]),
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
