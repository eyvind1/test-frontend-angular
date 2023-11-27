import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listPersons: any
  constructor(
    private personsService: PersonsService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getAllPersons();
  }


  getAllPersons() {
    this.personsService.getAllPersons().subscribe(res => {
      console.log(res);
    });
  }

  /**
   * Close event modal
   */
  closeEventModal() {

    this.modalService.dismissAll();
  }

  saveEvent() {
    /* if (this.formEditarTiendas.valid) {

    }
    this.submitted = true; */
  }

  /**
   * Open center modal
   * @param DataModalEditPerson center modal data
   */
  OpenModalEditPerson(DataModalEditPerson: any, data: Person) {
    /* this.crearFormulario();
    this.f(this.nombre_tienda).setValue(data.nombre_sede);
    this.f(this.direccion_tienda).setValue(data.direccion);
    this.f(this.ruc_tienda).setValue(data.ruc);
    this.f(this.telefono_tienda).setValue(data.telefono);
    this.sede.id_sede = data.id_sede;
    this.editLogoSede = data.logoURL;
    this.editlogoDOWNLOAD = data.logoDOWNLOAD;
    this.modalService.open(DataModalEditStore, { centered: true, windowClass: 'modal-holder' }); */
  }




  deletePerson(idPerson:string) {

  }
}




