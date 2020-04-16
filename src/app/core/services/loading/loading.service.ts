import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    loading: any;

    constructor(
        private loadingController: LoadingController) { }

    async presentLoading() {
        this.loading = await this.loadingController.create({message: 'Aguarde...'});
        return this.loading.present();
    }

    removeLoading(){
        return this.loading.dismiss();
    }

}