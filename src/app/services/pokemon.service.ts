import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url : string = environment.url;
  constructor(
    private http : HttpClient
  ) { }

  getPokemons (index = 0)  {
    return this.http.get<any>(`${this.url}/pokemon/${index}`)
  }

}
