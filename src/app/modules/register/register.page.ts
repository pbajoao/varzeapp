import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { LoadingService } from '@app/core/services/loading/loading.service';
import { EventConstants } from '@app/core/services/event/event-constants';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { ApiService } from '@app/core/http/api.service';

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
    private apiService: ApiService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.eventHandlerService.sendEvent(EventConstants.events.cadastro);
    this.buildForm();
  }

  async onRegister() {
    await this.loadingService.presentLoading();
    this.submitted = true;
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
      await this.apiService.usuarios(formCurrent, user)
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
      name: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] }),
      confirmPassword: new FormControl('', { validators: [Validators.required] }),
      dateRegister: new FormControl(new Date()),
      birth: new FormControl('', { validators: [Validators.required] })
    });
  }

  get name() { return this.registerForm.get('name'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get birth() { return this.registerForm.get('birth'); }
}
