import { Component, OnInit } from '@angular/core';
import { Acces } from '../models/registro-accesos.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { InfofraccionamientoPage } from '../infofraccionamiento/infofraccionamiento.page';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.page.html',
  styleUrls: ['./accesos.page.scss'],
})
export class AccesosPage implements OnInit {
fecha: Date = new Date();
post = { } as Acces;

  constructor( private toastCtrl: ToastController, 
               private loadingCtrl:LoadingController,
               private navCtrl: NavController,
               private fireStorte: AngularFirestore) { }

  ngOnInit() {
  }

  async createPost(post: Acces){
    if(this.formValidation()){
      let loader =this.loadingCtrl.create({
        message: "registroando..."
      });
      (await loader).present();
      try {
        await this.fireStorte.collection ("datosroot").add(post);
      } catch (e) {
        this.showToast(e);
      }
     
      (await loader).dismiss(); 
      this.navCtrl.navigateRoot("/infofraccionamientoPage")     
    }
  }
 formValidation(){
 
  if (!this.post.nfraccionamiento){
    this.showToast("Ingrese datos faltantes");
    return false;
  }
  if (!this.post.tipo){
    this.showToast("Ingrese datos faltantes");
    return false;
  }

  if (!this.post.fecha){
    this.showToast("Ingrese datos faltantes");
    return false;
  }
  return true;
 }
 showToast(message: string){
   this.toastCtrl.create({
     message: message,
     duration: 3100
   })
   .then(toastData => toastData.present());
 }
}
