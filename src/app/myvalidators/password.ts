import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class passwordvalidator {
  static passwordStrength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        //to avoid error if user didnt yet write any thing
        return null;
      }
      const hasnumber = /[0-9]/.test(value); //return true if correct or false if not
      const hasupper = /[A-Z]/.test(value); //return true if correct or false if not
      const haslower = /[a-z]/.test(value); //return true if correct or false if not
      const lengthvalid = value.length >= 8; //return true if correct or false if not
      const passwodvalid = haslower && hasnumber && hasupper && lengthvalid;
      return passwodvalid ? null : { pS: true };
    };
  }

  static passwordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const retypepassword = control.value;
      const password = control.parent?.get('password')?.value;
      if (!retypepassword) {
        return null;
      }
      if (retypepassword === password) {
        return null;
      } else {
        return { pM: true };
      }
    };
  }

  static matchPasswordForm(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')!.value;
    const retypepassword = form.get('retypepassword')!.value;
    if (!retypepassword || !password) {
      return null;
    }
    if (password === retypepassword) {
      return null;
    } else {
      return { pM: true };
    }
  }
}
