import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mechas: any[] = [];

  constructor(private alertController: AlertController) {
  }

  public addMecha() {
    this.mechas.push(this.mechas.length);
  }

  async showCredits() {
    const alert = await this.alertController.create({
      cssClass: 'attribution',
      header: 'Credits to',
      // subHeader: 'Subtitle',
      message: `<a href="https://www.vecteezy.com/free-vector/king-kong">King Kong Vectors by Vecteezy</a><br><br>
               <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`
      // buttons: ['OK']
    });
    await alert.present();
  }
}
