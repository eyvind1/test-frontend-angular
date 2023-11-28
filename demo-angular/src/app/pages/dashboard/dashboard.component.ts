import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from 'src/app/model/person';
import { Router } from '@angular/router';
import { SharedataService } from 'src/app/services/sharedata.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cols!: Column[];
  listPersons: Array<Person> = []


  constructor(
    private personsService: PersonsService,
    private router: Router,
    private sendPerson: SharedataService
  ) { }

  ngOnInit() {
    this.getAllPersons();
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'address', header: 'Address' },
      { field: 'role', header: 'Role' },
      { field: 'age', header: 'Age' }
  ];
  }


  getAllPersons() {
    this.personsService.getAllPersons().subscribe(res => {
      this.listPersons = res
    });
  }


  updatePerson(person:any) {
    this.sendPerson.setData(person);
    this.router.navigate(['update']);
  }

  deletePerson(idPerson:string) {

  }


}




