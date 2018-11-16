import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '../_services';

@Component({templateUrl: 'register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.tryRegister(this.registerForm.value)
            .then(res => {
              console.log(res);
              this.alertService.success('Регистрация прошла успешно!', true);
              this.router.navigate([{ outlets: {auth: ['login'] }}]);
              /*this.errorMessage = "";
              this.successMessage = "Your account has been created";*/
            }, err => {
                console.log(err.message);
              this.alertService.error(err);
              this.loading = false;
              /*this.errorMessage = err.message;
              this.successMessage = "";*/
            });
    }
}
