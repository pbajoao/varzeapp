import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { LoadingService } from '@app/core/services/loading/loading.service';
import { EventConstants } from '@app/core/services/event/event-constants';

@Component({
  selector: 'app-reset-password-person',
  templateUrl: './reset-password-person.page.html',
  styleUrls: ['./reset-password-person.page.scss'],
})
export class ResetPasswordPersonPage implements OnInit {

  formResetPassword: FormGroup;
  submitted: boolean = false;

  constructor(
    private eventHandlerService: EventHandlerService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.buildForm();
  }

  async onSave(){
    await this.loadingService.presentLoading();
    this.submitted = true;
    console.log(this.formResetPassword.value)
    if(this.formResetPassword.valid){
      this.update(this.formResetPassword.value);
    }else{
      this.loadingService.removeLoading();
      // this.loading = false;
    }
  }

  async update(form: any) {
    try {
      // const user = await this.authenticationService.register(form);
      
      // await this.authenticationService.usuarios(formCurrent, user)
      // this.eventHandlerService.sendEvent(EventConstants.events.alterarSenha)
    } catch (error) {
      console.log(error)
      // this.validateErrorResponse(error);
    } finally {
      this.loadingService.removeLoading();
    }
  }

  // private validateErrorResponse(err): void {
  //   switch (err.code) {
  //     case 'auth/argument-error':
  //       this.email.setErrors({ notFound: true });
  //       break;
  //     case 'auth/weak-password': 
  //       this.password.setErrors({invalid: true})
  //     default:
  //       break;
  //   }
  // }

  private buildForm(): void {
    this.formResetPassword = new FormGroup({
      senhaAtual: new FormControl('', { validators: [Validators.required] }),
      novaSenha: new FormControl('', { validators: [Validators.required] }),
      confirmaSenha: new FormControl('', { validators: [Validators.required] }),
    });
  }

  get senhaAtual() { return this.formResetPassword.get('senhaAtual'); }
  get novaSenha() { return this.formResetPassword.get('novaSenha'); }
  get confirmaSenha() { return this.formResetPassword.get('confirmaSenha'); }

}
