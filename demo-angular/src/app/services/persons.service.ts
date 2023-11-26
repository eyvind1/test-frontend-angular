import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPersons(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'tasks');
  }
}
