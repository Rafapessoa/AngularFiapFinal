import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './Login.page.html',
})
export class LoginPage {

    ngOnInit() {
    }
    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(
        public authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    Login(value) {
        this.authService.doLogin(value)
            .then(res => {
                this.router.navigate(['/userlist']);
            }, err => {
                this.errorMessage = err.message;
                this.router.navigate(['/login']);
            })
    }
}