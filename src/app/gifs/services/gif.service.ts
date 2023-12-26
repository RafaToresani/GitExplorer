import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environments } from '../../../environments/environments';
import { Datum, GIF } from '../interfaces/gif.interface';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  baseUrl = environments.baseURL;
  key = environments.apiKey;

  gifEmitter = new EventEmitter<Datum[]>();

  constructor(private http: HttpClient) {

  }

  getGifs(term : string): Observable<GIF | any>{
    return this.http.get<GIF>(`${this.baseUrl}${this.key}&q=${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }


}


