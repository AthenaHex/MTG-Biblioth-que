import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../models/cards';
import { Observable, map, filter } from 'rxjs';


@Component({
  selector: 'app-board-cards',
  templateUrl: './board-cards.component.html',
  styleUrls: ['./board-cards.component.css'],
  providers:[CardService]
})

export class BoardCardsComponent implements OnInit{

  // Variables __________________________________
  allCards:Card[] = [];
  cardsFiltered:Card[] = [];
  errorMessageCardService:string="";
  // ______ booléans de l'affichage
  displayColors:boolean = true;
  displayManaCost:boolean = true;
  displayType:boolean = true;
  displaySubtypes:boolean = true;
  displayRarity:boolean = true;
  displaySetCode:boolean = true;
  // ______ booléans et string des filtres
  filterSearchText:string = "";
  moreFilterIsDisplay:boolean = false;
  isFilterByName:boolean = true;
  isFilterByText:boolean = false; // text
  isFilterByFlavorText:boolean = false; // flavorText

  errorMessage:string="";

  // ___ Le constructeur défini la dépendance
  constructor(private cardService:CardService){};

  //___ OnInit :
  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: cards =>                 // if ok
      this.allCards = cards,    
    error:                               // if not ok
      err => this.errorMessage = err        // Message d'erreur
    })
    this.cardsFiltered = this.allCards;
  };

  // ___ Défini les cartes après filtre
  performFilter(filterSearchText:string):void{
    this.cardsFiltered = this.allCards;
    if(!this.isFilterByName && !this.isFilterByText && !this.isFilterByFlavorText){
      //Aucune filtre
    }else{
      filterSearchText = filterSearchText.toLocaleLowerCase(); // le filtre en minuscule
      if(this.isFilterByName==true){
        this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
        card.name.toLocaleLowerCase().includes(filterSearchText)); // ... le nom en minuscule contient le filtre en minuscule
      };
      if(this.isFilterByText==true){
        this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
        card.text?.toLocaleLowerCase().includes(filterSearchText)); // ...
      };
      if(this.isFilterByFlavorText==true){
        this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
        card.flavorText?.toLocaleLowerCase().includes(filterSearchText)); // ... 
      };
      //Cartes filtrées (pas de return)
    }
  };

  // ___ Réinitialiser les filtres
  reinitialisation():void{
    this.isFilterByName = true;
    this.isFilterByText = false; // text
    this.isFilterByFlavorText = false; // flavorText
    this.cardsFiltered = this.allCards;
  }

  


  // ___ Options d'affichages :
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

  // ______ affichage des filtres précis
  toggleMoreFilters():void{
    this.moreFilterIsDisplay = !this.moreFilterIsDisplay;
  }

}
