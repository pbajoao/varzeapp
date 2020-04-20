import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { EventConstants } from '@app/core/services/event/event-constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingService } from '@app/core/services/loading/loading.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  recoverForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private eventHandlerService: EventHandlerService) { }

  ngOnInit() {
    this.eventHandlerService.sendEvent(EventConstants.events.esqueciSenha);
    this.buildForm();
  }

  async onRecover() {
    await this.loadingService.presentLoading();
    console.log(this.recoverForm.value)
    
    if ( this.recoverForm.valid ) {
      // this.recover(this.recoverForm.valid);
    } else {
      this.loadingService.removeLoading();
      this.submitted = true;
      // this.loading = false;
    }
  }

  async recover(form: any) {
    try {
      // await this.authenticationService.recover(form);   
      this.eventHandlerService.sendEvent(EventConstants.events.esqueciSenhaSucesso)
    } catch (error) {
      console.log(error)
      this.validateErrorResponse(error);
    } finally {
      this.loadingService.removeLoading();
    }
  }

  private validateErrorResponse(err): void {
    this.eventHandlerService.sendEvent(EventConstants.events.esqueciSenhaErro)
    switch (err.code) {
      case 'email':
        this.email.setErrors({ notFound: true });
        break;

      default:
        break;
    }
  }

  private buildForm(): void {
    this.recoverForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] })
    });
  }

  get email() { return this.recoverForm.get('email'); }

}
