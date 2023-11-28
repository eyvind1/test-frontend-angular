import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.urlBackend+'persons');
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(environment.urlBackend+'persons',person);
  }

  updatePerson(idPerson: string, person: any): Observable<Person> {
    return this.http.patch<Person>(environment.urlBackend+'persons/'+idPerson,person);
  }

  deletePerson(idPerson: string) {
    return this.http.delete<any>(environment.urlBackend+'persons/'+idPerson);
  }
}
