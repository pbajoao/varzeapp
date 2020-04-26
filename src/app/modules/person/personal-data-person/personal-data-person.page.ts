import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingService } from '@app/core/services/loading/loading.service';
import { EventConstants } from '@app/core/services/event/event-constants';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { User } from '@app/models/user';
import { ApiService } from '@app/core/http/api.service';

@Component({
  selector: 'app-personal-data-person',
  templateUrl: './personal-data-person.page.html',
  styleUrls: ['./personal-data-person.page.scss'],
})
export class PersonalDataPersonPage implements OnInit, OnDestroy {

  userSubscription: Subscription;
  currentUserId: any;
  datePerson: User;
  formPerson: FormGroup;
  submitted: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private eventHandlerService: EventHandlerService,
    private apiService: ApiService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.buildForm();
    this.authenticationService.getAuth().onAuthStateChanged(
      user => {
        this.currentUserId = user.uid;
        this.getUse(this.currentUserId);
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  private getUse(currentUserId: any) {
    this.userSubscription = this.apiService.getUsuario(currentUserId).subscribe(
      user => {
        this.datePerson = user;
        this.formPerson.setValue(this.datePerson);
      });
  }

  async onSave() {
    await this.loadingService.presentLoading();
    this.submitted = true;
    console.log(this.formPerson.value)
    if (this.formPerson.valid) {
      this.update();
    } else {
      this.loadingService.removeLoading();
      // this.loading = false;
    }
  }

  async update() {
    try {
      const user = await this.apiService.updateDatePersonal(this.currentUserId, this.formPerson.value);
      this.eventHandlerService.sendEvent(EventConstants.events.alterarDadospessoais)
    } catch (error) {
      console.log(error)
      // this.validateErrorResponse(error);
    } finally {
      this.loadingService.removeLoading();
    }
  }

  private buildForm(): void {
    this.formPerson = new FormGroup({
      name: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', { validators: [Validators.required] }),
      birth: new FormControl('', { validators: [Validators.required] }),
      dateRegister: new FormControl(''),
    });
  }

  get name() { return this.formPerson.get('name'); }
  get lastName() { return this.formPerson.get('lastName'); }
  get birth() { return this.formPerson.get('birth'); }
}
