import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
    private personService: PersonsService
  ) { }

  ngOnInit(): void {
    this.createFormPerson();
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
  registerPerson() {
    if (this.formPerson.valid) {
      this.person.name = this.f(this.name)?.value;
      this.person.address = this.f(this.address)?.value;
      this.person.role = this.f(this.role)?.value;
      this.person.age = Number(this.f(this.age)?.value);

      this.personService.createPerson(this.person).subscribe(res => {
        this.formPerson.reset();
      })
    } else {
      return;
    }
  }
}
