import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { AdminRegService } from '../../../../store/admin-reg-store/services/admin-reg.service';

@Component({
  selector: 'app-admin-registration-form-ui',
  templateUrl: './admin-registration-form-ui.component.html',
  styleUrls: ['./admin-registration-form-ui.component.scss']
})
export class AdminRegistrationFormUiComponent implements OnInit {
    form!: FormGroup;
    
    @Input() formError: boolean;
    @Input() disabled?: boolean | null;

    @Output() login = new EventEmitter();
    @Output() singUp = new EventEmitter();
    @Input() failedLogin: boolean = true;

    constructor(
        private title: Title,
        private adminRegService: AdminRegService
            ) { 
            title.setTitle('Регистрация');
        }

    ngOnInit(): void {
        this.form = new FormGroup({
            'login': new FormControl(null, [Validators.required], <AsyncValidatorFn> this.forbiddenLogin.bind(this)),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
            'nickName': new FormControl(null, [Validators.required]),
            'agree': new FormControl(false, [Validators.requiredTrue])
        });
    }

    onSubmit() {
        const {login, password, nickName} = this.form.value;
        this.singUp.emit({login, password, nickName});
        /*const user = new User(email, password, name);*/
    }

/*    
*/
    forbiddenLogin(control: FormControl): Promise<any> {

        return new Promise((resolve, reject) => {  
            this.adminRegService.checkLogin(control.value).subscribe(res => {
                if (res) {
                  resolve({forbiddenLogin: true})
                } else {
                  resolve(null);
                }
            });   

                 
            /*this.login.emit(control.value);
            console.log(this.failedLogin);
            console.log(this.form);
            resolve({forbiddenLogin: this.failedLogin})*/
                        
        })
        



        /*return new Promise((resolve, reject) => {
          this.usersService.getUserByLogin(control.value)
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
