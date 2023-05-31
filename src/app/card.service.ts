/* eslint-disable @typescript-eslint/no-extra-semi */
import { Injectable } from '@angular/core';
import { Card } from "./models/cards";

import { Observable, catchError, filter, map, tap, throwError } from "rxjs"; // Reactive extends (pour gerer les choses de manière asynchrone)
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  // Mock http data
  constructor(private _http : HttpClient){};
  private _cardsUrl = 'api/mockscards.json'; // Lien vers les mocks data

  // Méthode de Getter pour tout
  getCards():Observable<Card[]>{
    return this._http.get<Card[]>(this._cardsUrl).pipe(
      // tap(data => console.log('Observable<Card[]> : ', JSON.stringify(data))), // Pour print les données : JSON.stringify(data)
      catchError(this.handleError)
    );
  }


  getCardsByNumber(number: string):Observable<Card>{
    return this._http.get<Card[]>("../"+this._cardsUrl).pipe(
      map(cards => cards.filter(card => card.number === number)[0])
    );
  }
  
  private handleError(err:HttpErrorResponse){
    let errorMessage=""; // message d'erreur
    if(err.error instanceof ErrorEvent){
      // erreur d'accès au network
      errorMessage = `Une erreur a eu lieu : ${err.error.message}`;
    }else{
      // erreur dans les données reçues
      errorMessage = `Le serveur a renvoyé : ${err.status}, le message d'erreur est : ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(()=>errorMessage);
  }

}
