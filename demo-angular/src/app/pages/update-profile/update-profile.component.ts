import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonsService } from 'src/app/services/persons.service';
import { SharedataService } from 'src/app/services/sharedata.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  formPerson!: FormGroup;
  name:string = "fieldName"
  address: string = "fieldAddress";
  role: string = "fieldRole";
  age: string = "fieldAge";

  numberPattern = '[0-9]+';
  lettersPattern = '[a-zA-Z ]*';

  person = new Person;
  constructor(
    private fb: FormBuilder,
    private personService: PersonsService,
    private personData: SharedataService,
    private router : Router
  ) {
    this.personData.getData.subscribe(res=>{
      this.person = res
    });
  }

  ngOnInit(): void {
    this.createFormPerson();
    this.setDataForm();
  }

  /*
  * Initialze form with validators
  */
  createFormPerson() {
    this.formPerson = this.fb.group({
      [this.name] : [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern(this.lettersPattern)
      ]],
      [this.address] : [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      [this.role] : [null, [
        Validators.pattern(this.lettersPattern)
      ]],
      [this.age] : [null, [
        Validators.min(1),
        Validators.max(100),
        Validators.pattern(this.numberPattern)
      ]]
    })
  }

  setDataForm() {
    this.f(this.name)?.setValue(this.person.name);
    this.f(this.address)?.setValue(this.person.address);
    this.f(this.role)?.setValue(this.person.role);
    this.f(this.age)?.setValue(this.person.age);

  }

  /**
   * Returns form Person
   */
  get formP() {
    return this.formPerson.controls;
  }

    /**
   * Help function to get the form values
   */
    f(field: any) {
      return this.formPerson.get(field);
    }

  /**
   * Call the service from Backend and register a Person
   */
  updatePerson() {
    if (this.formPerson.valid) {
      const updatePerson = {
        name : this.f(this.name)?.value,
        address : this.f(this.address)?.value,
        role : this.f(this.role)?.value,
        age : this.f(this.age)?.value,
      }

      this.personService.updatePerson(this.person.id!, updatePerson).subscribe(res =>{
        console.log('actualizado');
        this.router.navigate(['dashboard'])
      })

    } else {
      return;
    }
  }
}
