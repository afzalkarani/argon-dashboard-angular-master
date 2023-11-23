import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';



export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {



    public static strong(control: FormControl): ValidationResult {
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }


    public static matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
        return (abstractControl: AbstractControl) => {
            const control = abstractControl.get(controlName);
            const matchingControl = abstractControl.get(matchingControlName);
    
            if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
                return null;
            }
    
            if (control!.value !== matchingControl!.value) {
              const error = { confirmedValidator: 'Passwords do not match.' };
              matchingControl!.setErrors(error);
              return error;
            } else {
              matchingControl!.setErrors(null);
              return null;
            }
        }
      }  

}

