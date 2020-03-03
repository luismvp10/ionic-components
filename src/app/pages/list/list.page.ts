import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {IonList} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista',  {static: false}) lista: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers()

  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {

    this.presentToast('Guardó en Favoritos');
    this.lista.closeSlidingItems();
  }
  share(user){
    // console.log('Share', user);
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();
  }

  trash(user){
    this.presentToast('Borrado!');
    // console.log('trash', user);
  }

}
