import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-registration-form-ui',
  templateUrl: './admin-registration-form-ui.component.html',
  styleUrls: ['./admin-registration-form-ui.component.scss']
})
export class AdminRegistrationFormUiComponent implements OnInit {
    form: FormGroup;

    constructor(
        private router: Router,
        private title: Title
            ) { 
            title.setTitle('Регистрация');
        }

    ngOnInit(): void {
        this.form = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email], <AsyncValidatorFn> this.forbiddenEmails.bind(this)),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
            'name': new FormControl(null, [Validators.required]),
            'agree': new FormControl(false, [Validators.requiredTrue])
        });
    }

    onSubmit() {
        const {email, password, name} = this.form.value;
        /*const user = new User(email, password, name);*/
    }

    forbiddenEmails(control: FormControl): Promise<any> {
      return undefined;
        /*return new Promise((resolve, reject) => {
          this.usersService.getUserByEmail(control.value)
              .subscribe((data) => {
                const user = data[0];
                if (user) {
                  resolve({forbiddenEmail: true});
                } else {
                  resolve(null);
                }
              })
        })*/
    }
}
