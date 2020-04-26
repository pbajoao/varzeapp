import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { LoadingService } from '@app/core/services/loading/loading.service';
import { EventConstants } from '@app/core/services/event/event-constants';

@Component({
  selector: 'app-player-data-person',
  templateUrl: './player-data-person.page.html',
  styleUrls: ['./player-data-person.page.scss'],
})
export class PlayerDataPersonPage implements OnInit {

  formPlay: FormGroup;
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
    console.log(this.formPlay.value)
    if(this.formPlay.valid){
      this.update(this.formPlay.value);
    }else{
      this.loadingService.removeLoading();
      // this.loading = false;
    }
  }

  async update(form: any) {
    try {
      // const user = await this.authenticationService.register(form);
      
      // await this.authenticationService.usuarios(formCurrent, user)
      // this.eventHandlerService.sendEvent(EventConstants.events.alterarDadosDoJogador)
    } catch (error) {
      console.log(error)
      // this.validateErrorResponse(error);
    } finally {
      this.loadingService.removeLoading();
    }
  }

  private buildForm(): void {
    this.formPlay = new FormGroup({
      apelido: new FormControl('', { validators: [Validators.required] }),
      altura: new FormControl('', { validators: [Validators.required] }),
      pe: new FormControl('', { validators: [Validators.required] }),
    });
  }

  get apelido() { return this.formPlay.get('apelido'); }
  get altura() { return this.formPlay.get('altura'); }
  get pe() { return this.formPlay.get('pe'); }

}
