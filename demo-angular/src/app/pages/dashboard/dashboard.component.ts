import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(
    private personsService: PersonsService
  ) { }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons() {
    this.personsService.getAllPersons().subscribe(res => {
      console.log(res);
    });
  }
}
