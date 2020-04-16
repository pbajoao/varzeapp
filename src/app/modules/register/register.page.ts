import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { LoadingService } from '@app/core/services/loading/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.buildForm();
  }

  goBack() {
    window.history.back()
  }

  async onRegister(){
    await this.loadingService.presentLoading();
    console.log(this.registerForm.value)
    
    if ( this.registerForm.valid ) {
      // this.register(this.registerForm.valid);
    } else {
      this.loadingService.removeLoading();
      this.submitted = true;
      // this.loading = false;
    }
  }

  async register(form: any){
    try {
      await this.authenticationService.register(form);      
    } catch (error) {
      console.log(error)
      this.validateErrorResponse(error);
    } finally {
      this.loadingService.removeLoading();
    }
  }

  private validateErrorResponse(err): void {
    switch (err.code) {
      case 'email':
        this.email.setErrors({ notFound: true });
        break;
    
      default:
        break;
    }
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
