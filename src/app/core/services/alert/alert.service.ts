import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertProperties } from '@app/models/alert/alert.model';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(public alertController: AlertController) {}

    async presentAlert(properties: AlertProperties) {
        const alert = await this.alertController.create({
            header: properties.title,
            subHeader: properties.subtitle,
            message: properties.message,
            buttons: [properties.textBtn]
        });

        await alert.present();
    }
}