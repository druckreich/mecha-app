import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mechas: any[] = [];

  constructor() {}

  public addMecha() {
    this.mechas.push(this.mechas.length);
  }

  removeMecha(mecha: number) {
    this.mechas.splice(mecha, 1);
  }
}
