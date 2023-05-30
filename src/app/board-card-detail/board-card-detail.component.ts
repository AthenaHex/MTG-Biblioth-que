import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../models/cards';
import { Observable } from 'rxjs';
import { CardService } from '../card.service';

@Component({
  selector: 'app-board-card-detail',
  templateUrl: './board-card-detail.component.html',
  styleUrls: ['./board-card-detail.component.css']
})
export class BoardCardDetailComponent implements OnInit{
  card$: Observable<Card> | undefined;
  cardName:string = "";

  constructor(
    private route: ActivatedRoute, 
    private cardService: CardService) { }

  ngOnInit(): void {
    this.cardName = this.route.snapshot.paramMap.get('number') !== null ? this.route.snapshot.paramMap.get('number')! : "1";
    this.card$ = this.cardService.getCardsByNumber(this.cardName);
  }
}
