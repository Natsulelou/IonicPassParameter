import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any = {
    state: '571100200',
    number: 12345
  };
  dataId: any;
  constructor(
    private navCtrl: NavController
  ) { }

  openDetail() {
    this.navCtrl.navigateForward('/detail/' + this.data.state);
  }

  openDetailById() {
    this.navCtrl.navigateForward('/detail/' + this.dataId);
  }
}
