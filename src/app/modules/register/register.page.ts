import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  goBack() {
    window.history.back()
  }

  onRegister(){
    console.log(this.registerForm.value)
    console.log(this.registerForm.valid)
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      nome: new FormControl('', { validators: [Validators.required] }),
      sobrenome: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] }),
      confirmPassword: new FormControl('', { validators: [Validators.required] }),
      ativo: new FormControl(''),
      data: new FormControl(new Date())
    });
  }

  get nome() { return this.registerForm.get('nome'); }
  get sobrenome() { return this.registerForm.get('sobrenome'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
}
