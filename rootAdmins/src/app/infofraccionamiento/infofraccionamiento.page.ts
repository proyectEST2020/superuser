import { Component, OnInit } from '@angular/core';
import { Acces } from '../models/registro-accesos.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';

@Component({
  selector: 'app-infofraccionamiento',
  templateUrl: './infofraccionamiento.page.html',
  styleUrls: ['./infofraccionamiento.page.scss'],
})
export class InfofraccionamientoPage implements OnInit {
post = {} as Acces;
id: any;

  constructor( private actRoute: ActivatedRoute,
               private toastCtrl: ToastController,
               private sanitizer: DomSanitizer,
               private loadingCtrl: LoadingController,
               private firestore: AngularFirestore) { 
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }




  ngOnInit() {
  this.getPostById(this.id);
  }

  async getPostById(id: string){
    let loader = this.loadingCtrl.create({
      message: "Espera un momento...."
    });

    (await loader ) .present();
    this.firestore.doc("users/" +id) 
    .valueChanges ()
    .subscribe (data => {
      this.post.cuota = data["cuota"];
      this.post.nfraccionamiento = data["nfraccionamiento"];
      this.post.tipo = data["tipo"];      
      this.post.image = data["image"];
      
    });

    (await loader) .dismiss();
  }

  

  async updatePost(post: Acces){
      let loader = this.loadingCtrl.create({
        message: "Actualizando Datos..."
      });
      (await loader).present();

      try {
        await this.firestore.doc("users/" + this.id).update(post);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();
  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }


  getImgContent(imgFile:string): SafeUrl {
    enableProdMode();
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }

}
