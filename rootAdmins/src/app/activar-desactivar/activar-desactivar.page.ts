import { Component} from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-activar-desactivar',
  templateUrl: './activar-desactivar.page.html',
  styleUrls: ['./activar-desactivar.page.scss'],
})
export class ActivarDesactivarPage  {
  access : any;
  constructor( private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private ToastCtrl: ToastController) { }

ionViewWillEnter(){
  this.getPost();
}

async getPost(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {
    this.firestore
    .collection ("users")
    .snapshotChanges ()
    .subscribe (data => {
      this.access = data.map(e => {
      return {
        id: e.payload.doc.id,
        users: e.payload.doc.data()["users"]
      };
    });

    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);

  }
}
 
showToast (message:string){
  this.ToastCtrl.create({
    message: message, 
    duration: 3000
  })
  .then( ToastData => ToastData.present());
}
}
