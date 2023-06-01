import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardCardsComponent } from './board-cards/board-cards.component';
import { AboutComponent } from './about/about.component';
import { BoardCardDetailComponent } from './board-card-detail/board-card-detail.component';

const routes: Routes=[
  { path: 'home', component: HomeComponent},
  { path: 'list', component: BoardCardsComponent},
  // { path: 'comments', component: BoardOnlyCommentsComponent},
  // { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'details/:number', component: BoardCardDetailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
