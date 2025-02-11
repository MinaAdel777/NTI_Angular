import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  change(form: NgForm) {
    form.form.patchValue({ email: 'ali@ali.com' });
    console.log(form.value);
  }

  postData(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted');
    } else {
      console.log('Form Not Submitted');
    }
    console.log(form.value);
    console.log(form);
  }
}
