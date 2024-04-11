import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = {};
  submitted = false;

  defaultSubject : string = "Ng";
  defaultGender : string = "Men";

  submitForm(form: NgForm) {
    this.submitted = true;
    this.formData = form.value;
  }
}
