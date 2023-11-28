import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from 'src/app/model/person';
import { Router } from '@angular/router';
import { SharedataService } from 'src/app/services/sharedata.service';
import Swal from 'sweetalert2';
import { Sweetalert } from 'src/utils/sweetalert';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cols!: Column[];
  listPersons: Array<Person> = [];
  roles: any[] = [{ id:1, name: 'Admin' }, {id:2, name: 'User' }];
  role = "Admin";
  selectedRole: any = null;

  constructor(
    private personsService: PersonsService,
    private router: Router,
    private sendPerson: SharedataService
  ) {

  }

  ngOnInit() {
    this.getAllPersons();
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'address', header: 'Address' },
      { field: 'role', header: 'Role' },
      { field: 'age', header: 'Age' },
    ];
  }

  getAllPersons() {
    this.selectedRole = this.roles[0];
    this.personsService.getAllPersons().subscribe((res) => {
      this.listPersons = res;
    });
  }

  updatePerson(person: any) {
    this.sendPerson.setData(person);
    this.router.navigate(['update']);
  }

  deletePerson(person: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-danger ms-2',
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure you want to remove the person?',
        icon: 'warning',
        cancelButtonText: 'No, cancel!',
        confirmButtonText: 'Yes, delete!',
        showCancelButton: true,
      })
      .then((result) => {
        if (result.value) {
          Sweetalert('loading', 'Cargando...');
          this.personsService.deletePerson(person.id).subscribe(
            (res) => {
              Sweetalert('close', '');
              this.getAllPersons();
            },
            (error) => {
              Sweetalert('close', '');
              if (error.status !== 404) {
                Sweetalert('error', 'Error');
              }
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Canceled',
            'Deletion has not been performed',
            'error'
          );
        }
      });
  }

  changeRole() {
    this.role = this.selectedRole.name;
  }
}
