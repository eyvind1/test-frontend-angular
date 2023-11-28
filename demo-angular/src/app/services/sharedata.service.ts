import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  private data = new BehaviorSubject<Person>(<Person>{});
  getData = this.data.asObservable();

  constructor() { }

  setData(data:any) {
    this.data.next(data);
  }
}
