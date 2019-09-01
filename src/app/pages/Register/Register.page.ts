import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.page.html',
})
export class RegisterPage {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  Register(value) {

    this.authService.doRegister(value)
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "Conta criada com sucesso";
        this.router.navigate(['/login']);
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

}
