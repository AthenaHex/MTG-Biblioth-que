import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../models/cards';
import { Rulings } from '../models/rulings';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-board-cards',
  templateUrl: './board-cards.component.html',
  styleUrls: ['./board-cards.component.css'],
  providers:[CardService]
})

export class BoardCardsComponent implements OnInit{
  // Variables __________________________________
  cards$: Observable<Card[]> | undefined;
  errorMessageCardService:string="";
  displayColors:boolean = true;
  displayManaCost:boolean = true;
  displayType:boolean = true;
  displaySubtypes:boolean = true;
  displayRarity:boolean = true;
  displaySetCode:boolean = true;

  // ___ Le constructeur défini la dépendance
  constructor(private cardService:CardService){}
  
  ngOnInit(): void {
    this.cards$ = this.cardService.getCards();
  }

  colorFilter:string = "W";

  colorDisplay(colors:string[]):string{
    const size:number = colors.length;
    if(size==0){
      return "grey";
    }else{
      if(size==1){
        const color:string = colors[0];
        switch(color){
          case "W":
            return "white";
          case "B":
            return "black";
          case "U":
            return "blue";
          case "R":
            return "red";
          case "G":
            return "green";
          default :
            return "grey";
        }
      }else{
          return "multi-colors";
      }
    }
    
  }



}
