import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { JsonWebSite } from "./models/jsonWebSite";
import { Observable, catchError, filter, map, tap, throwError } from "rxjs"; // Reactive extends (pour gerer les choses de manière asynchrone)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class JsonWebSiteService {
  
  extractData:JsonWebSite = {
    title: '',
    description: '',
    image: '',
    url: ''
  };

  constructor(private _http : HttpClient){};

  private _jsonWebSiteUrl = 'http://api.linkpreview.net/?key=9284bad4ecc53a00dddee1c133bc03e8&q=https://www.google.com'; // Lien vers les mocks data



  // Méthode de Getter pour le json
  getJsonWebSite(url: string): Observable<JsonWebSite|any> {
    return this._http.get(url);
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
