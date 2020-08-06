import { Component, OnInit } from '@angular/core';
import { Acces } from '../models/registro-accesos.model';
import { User } from '../models/user.mode';

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
user = { } as User;

  constructor( private toastCtrl: ToastController, 
               private loadingCtrl:LoadingController,
               private navCtrl: NavController,
               private afAuth: AngularFireAuth,
               private fireStorte: AngularFirestore) { }

  ngOnInit() {
  }

  async register(user: User){
    if(this.formValidation()){
  
      //mostrar carga de espera
     let loader = this.loadingCtrl.create({
        message: "please wait..."
      });
      (await loader).present();
  
      try {
        await this.afAuth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
          console.log(data)
  //redirigir a Home
  
          this.navCtrl.navigateRoot("home");
  
        }); 
  
      } catch(e){
        this.showToast(e);
      }
      //cerrar carga de espera
      
      (await loader).dismiss();
    }
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

  if(!this.user.email){
    this.showToast("Enter email");
    return false;
  }

  if(!this.user.password){
    this.showToast("Enter password");
    return false;
  }
 
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
