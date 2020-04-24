import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { LoadingService } from '@app/core/services/loading/loading.service';
import { EventConstants } from '@app/core/services/event/event-constants';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { LoginContext } from '@app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  serverError = false;
  submitted = false;
  isviewpassword: boolean = false;

  constructor(
    private eventHandlerService: EventHandlerService,
    private loadingService: LoadingService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.eventHandlerService.sendEvent(EventConstants.events.login);
    this.buildForm();
  }

  toggleViewPassword() {
    this.isviewpassword = !this.isviewpassword;
    let inputpassword = document.querySelector('#ispw');

    this.isviewpassword ?
      inputpassword.setAttribute('type', 'text') :
      inputpassword.setAttribute('type', 'password');
  }

  onSubmitGmail() {
    this.authenticationService.googleLogin()
      .then(
        user => {
          this.authenticationService.authGoogle(user);
        })
      .catch( (error) => console.log('erro ao logar' + error))
  }

  async onSubmit() {
    await this.loadingService.presentLoading();
    this.submitted = true;
    if (this.loginForm.valid) {
      this.login(this.loginForm.value);
    } else {
      this.loadingService.removeLoading();
    }
  }

  async login(form: LoginContext) {
    try {
      await this.authenticationService.login(form);
      this.eventHandlerService.sendEvent(EventConstants.events.loginSucesso);
    } catch (error) {
      console.log(error)
      this.validateErrorResponse(form, error);
    } finally {
      this.loadingService.removeLoading();
    }
  }

  private validateErrorResponse(loginContext: LoginContext, err: any): void {
    this.eventHandlerService.sendEvent(EventConstants.events.loginErro, { email: loginContext.email });
    const expr: string = err.code;
    if (expr == 'auth/user-not-found') {
      this.email.setErrors({ notFound: true });
    }
  }

  private buildForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
