import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { LoadingService } from '@app/core/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  serverError = false;
  submitted = false;

  constructor(
    private loadingService: LoadingService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.buildForm();
  }

  async onSubmit() {
    await this.loadingService.presentLoading();
    console.log(this.loginForm.value)

    if (this.loginForm.valid) {
      // this.login(this.loginForm.valid);
    } else {
      this.loadingService.removeLoading();
      this.submitted = true;
    }
  }

  async login(form: any) {
    try {
      await this.authenticationService.login(form);
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
    this.loginForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
