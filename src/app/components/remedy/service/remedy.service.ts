import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Remedy } from '../model/remedy.model';
@Injectable({
  providedIn: 'root'
})
export class RemedyService {

  constructor(private http: HttpClient) { }

  public getRemedies():Observable<Remedy[]>{
    return this.http.get<Remedy[]>('http://localhost:3000/remedy')
  }

  public createRemedy():Observable<any>{
    return this.http.post('http://localhost:3000/remedy',null)
  }
}
