import { Component, OnInit } from '@angular/core';
import { Acces } from '../models/registro-accesos.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-infofraccionamiento',
  templateUrl: './infofraccionamiento.page.html',
  styleUrls: ['./infofraccionamiento.page.scss'],
})
export class InfofraccionamientoPage implements OnInit {
post = {} as Acces;
id: any;

  constructor( private actRoute: ActivatedRoute,
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
    this.firestore.doc("datosroot/" +id) 
    .valueChanges ()
    .subscribe (data => {
      this.post.cuota = data["cuota"];
      this.post.nfraccionamiento = data["nfraccionamiento"];
      this.post.fecha = data["fecha"];      
      // this.post.status = data["status"];
      
    });

    (await loader) .dismiss();

  }

  

  segmentChanged(event: any) {
    console.log('Segment changed', event);
  }

}
