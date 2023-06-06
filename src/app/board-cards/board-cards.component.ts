import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../models/cards';
import { Observable, map, filter } from 'rxjs';
import { JsonWebSiteService } from '../json-web-site.service';
import { JsonWebSite } from '../models/jsonWebSite';


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
  //              -
  errorMessageCardService:string="";
  errorMessageGetCards:string="";
  errorMessageGetJsonWebSite:string="";
  // ______ booléans de l'affichage
  isCardImgVisible:boolean = false;
  //              -
  displayColors:boolean = true;
  displayManaCost:boolean = true;
  displayType:boolean = true;
  displaySubtypes:boolean = true;
  displayRarity:boolean = true;
  displaySetCode:boolean = true;
  // ______ booléans et value des filtres
  moreFilterIsDisplay:boolean = false;
  filterSearchByName:string = "";
  filterSearchByText:string = "";
  filterSearchByFlavorText:string = "";
  //              -
  isFilterByPower:boolean = false; //power
  searchValuePower:number=0;
  directionFilterPower="";
  //              -
  isFilterByToughness:boolean = false; //thoughness
  searchValueToughness:number=0;
  directionFilterToughness="";
  //              -
  isFilterByConvertedManaCost:boolean = false; //convertedManaCost
  searchValueConvertedManaCost:number=0;
  directionFilterConvertedManaCost="";
  //              -
  isFilterByArtist:boolean = false;
  filterSearchByArtist:string="";
  // ______ url(s)
  key:string = "9284bad4ecc53a00dddee1c133bc03e8";
  cardUrl:string = "https://fr.wikipedia.org/wiki/Girafe";
  getJsonUrl:string = "http://api.linkpreview.net/?key="+this.key+"&q="+this.cardUrl;
  jsonWebSite:JsonWebSite={
    title: '',
    description: '',
    image: '',
    url: ''
  }

  // ______ Le constructeur défini la dépendance
  constructor(private cardService:CardService, private jsonWebSiteService:JsonWebSiteService){};

  
  // Méthodes __________________________________
  //___ OnInit :
  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: cards =>                 // if ok
        this.allCards = cards,    
      error:                               // if not ok
        errGetCards => this.errorMessageGetCards = errGetCards        // Message d'erreur
    })
    
    // _____ De la daube à retirer
    this.cardsFiltered = this.allCards;
    this.setCardImgUrl(this.getJsonUrl);
    // _____ De la daube à retirer
  }

  // ___ Récupère les infos du site à parti de l'URL de l'api qui fait ça
  setCardImgUrl(url:string):void{
    // l'url est le getJsonUrl
    this.jsonWebSiteService.getJsonWebSite(url).subscribe({
      next: json =>                 // if ok
        this.jsonWebSite = json,    
      error:                               // if not ok
        errGetJsonWebSite => this.errorMessageGetJsonWebSite = errGetJsonWebSite  // Message d'erreur
    })
  }

  // ___ Défini les cartes après filtre
  performFilter():void{
    this.cardsFiltered = this.allCards;
    if(this.filterSearchByName!==""){
      this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
        card.name.toLocaleLowerCase().includes(this.filterSearchByName)); // ... le nom en minuscule contient le filtre en minuscule
    };
    if(this.filterSearchByText!==""){
      this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
        card.text?.toLocaleLowerCase().includes(this.filterSearchByText)); // ...
    };

    if(this.filterSearchByFlavorText!==""){
      this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
        card.flavorText?.toLocaleLowerCase().includes(this.filterSearchByFlavorText)); // ... 
    };
    if(this.isFilterByPower){
      switch(this.directionFilterPower){
        case "=":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            Number(card.power)==(this.searchValuePower)); // ... 
          break;
        case "<":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            Number(card.power)<(this.searchValuePower)); // ... 
          break;
        case ">":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            Number(card.power)>(this.searchValuePower)); // ... 
          break;
      }
    }
    if(this.isFilterByToughness){
      switch(this.directionFilterPower){
        case "=":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            Number(card.toughness)==(this.searchValueToughness)); // ... 
          break;
        case "<":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            Number(card.toughness)<(this.searchValueToughness)); // ... 
          break;
        case ">":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            Number(card.toughness)>(this.searchValueToughness)); // ... 
          break;
      }
    }
    if(this.isFilterByConvertedManaCost){
      switch(this.directionFilterPower){
        case "=":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            card.convertedManaCost==(this.searchValueConvertedManaCost)); // ... 
          break;
        case "<":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            card.convertedManaCost<(this.searchValueConvertedManaCost)); // ... 
          break;
        case ">":
          this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
            card.convertedManaCost>(this.searchValueConvertedManaCost)); // ... 
          break;
      }
    }
    if(this.isFilterByArtist){
      this.cardsFiltered = this.cardsFiltered.filter((card:Card)=> // Filtre si ...
      card.artist?.toLocaleLowerCase().includes(this.filterSearchByArtist)); // ... 
    }
      //Cartes filtrées (pas de return)
      console.log("La direction est : "+this.directionFilterConvertedManaCost+", searchValueConvManaCost"+this.searchValueConvertedManaCost);
    };



  


  // ___ Options d'affichages :
  // ______ Change la couleur des cases en fonction de la couleur de la carte
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
  // ______ affichage des filtres plus précis
  toggleMoreFilters():void{
    this.moreFilterIsDisplay = !this.moreFilterIsDisplay;
  }
  // ______ Réinitialiser les filtres
  reinitialisation():void{
    this.filterSearchByName="";
    this.filterSearchByText="";
    this.filterSearchByFlavorText="";
    this.performFilter();
  }
  // ______ Active le type de recherche lorsque son champs est onfocus
  validSearchBool(theBooleanString:string) {
    switch(theBooleanString){
      case "power":
        this.isFilterByPower = true;
        break;
      case "toughness":
        this.isFilterByToughness = true;
        break;
      case "convertedManaCost":
        this.isFilterByConvertedManaCost = true;
        break;
      case "artist":
        this.isFilterByArtist = true;
        break;
    }
    }
    // ______ Affiche ou cache l'image si la souris passe sur le nom de la carte
    displayCardImg(isOrIsNot:boolean):void{
      this.isCardImgVisible = isOrIsNot;
    }
}
