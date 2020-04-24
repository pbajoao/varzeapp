import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { LoadingService } from '@app/core/services/loading/loading.service';
import { EventConstants } from '@app/core/services/event/event-constants';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';

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
    private eventHandlerService: EventHandlerService,
    private loadingService: LoadingService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.eventHandlerService.sendEvent(EventConstants.events.cadastro);
    this.buildForm();
  }

  async onRegister() {
    await this.loadingService.presentLoading();
    this.submitted = true;
    console.log(this.registerForm.value)
    if (this.registerForm.valid) {

      if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
        this.confirmPassword.setErrors({ notFound: true });
        this.loadingService.removeLoading();
      } else {
        this.register(this.registerForm.value);
      }
    } else {
      this.loadingService.removeLoading();
      this.loading = false;
    }
  }

  async register(form: any) {
    try {
      const user = await this.authenticationService.register(form);
      const formCurrent = this.removeEmailPassword();
      await this.authenticationService.usuarios(formCurrent, user)
      this.eventHandlerService.sendEvent(EventConstants.events.cadastroComSucesso)
    } catch (error) {
      console.log(error)
      this.validateErrorResponse(error);
    } finally {
      this.loadingService.removeLoading();
    }
  }

  private validateErrorResponse(err): void {
    switch (err.code) {
      case 'auth/argument-error':
        this.email.setErrors({ notFound: true });
        break;
      case 'auth/weak-password': 
        this.password.setErrors({invalid: true})
      default:
        break;
    }
  }


  removeEmailPassword(){
    const formCurrent = Object.assign({}, this.registerForm.value);

    delete formCurrent.email;
    delete formCurrent.password;
    delete formCurrent.confirmPassword;

    return formCurrent;
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      nome: new FormControl('', { validators: [Validators.required] }),
      sobrenome: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] }),
      confirmPassword: new FormControl('', { validators: [Validators.required] }),
      dataCadastro: new FormControl(new Date()),
      dataNascimento: new FormControl('', { validators: [Validators.required] })
    });
  }

  get nome() { return this.registerForm.get('nome'); }
  get sobrenome() { return this.registerForm.get('sobrenome'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get dataNascimento() { return this.registerForm.get('dataNascimento'); }
}
