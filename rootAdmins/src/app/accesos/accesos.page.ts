import { Component, OnInit } from '@angular/core';
// import { Acces } from '../models/registro-accesos.model';
// import { User } from '../models/user.mode';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';


let base64data = null; 

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.page.html',
  styleUrls: ['./accesos.page.scss'],
})
export class AccesosPage implements OnInit {
fecha: Date = new Date();
// post = { } as Acces;
// user = { } as User;

 public email: string;
  public password: string;
  public users: string;
  public nfraccionamiento: string;
  public tipo: string;
  public fechacreacion: string;
  public cuota: string;
  public image: string;

 // user = {} as User;
  constructor( private toastCtrl: ToastController, 
               private loadingCtrl: LoadingController,
               private afAuth: AuthService,
               private router: Router
               
            ) { }

  ngOnInit() { }

  onSubmitRegistro(){
    this.afAuth.register(this.email, 
                         this.password, 
                         this.users, 
                         this.nfraccionamiento,
                         this.tipo,
                         this.fechacreacion,
                         this.cuota,
                         this.image = base64data == "" || base64data == null ? this.image : base64data).then( auth => {
      this.router.navigate(['activar-desactivar/'])
    }).catch(err => console.log(err))
  } 

  loadImageFromDevice(event) {  
    const file = event.target.files[0]; 
    if (file) {      
      var FR= new FileReader();      
      FR.addEventListener("load", function(e) {
        base64data = e.target.result;
      });      
      FR.readAsDataURL(file);
    }   
  }


}

//   async register(user: User){
//     if(this.formValidation()){
  
//       //mostrar carga de espera
//      let loader = this.loadingCtrl.create({
//         message: "please wait..."
//       });
//       (await loader).present();
  
//       try {
//         await this.afAuth
//         .createUserWithEmailAndPassword(user.email, user.password)
//         .then(data => {
//           console.log(data)
//   //redirigir a Home
  
//           this.navCtrl.navigateRoot("home");
  
//         }); 
  
//       } catch(e){
//         this.showToast(e);
//       }
//       //cerrar carga de espera
      
//       (await loader).dismiss();
//     }
//   }
  
  



//   async createPost(post: Acces){
//     if(this.formValidation()){
//       let loader =this.loadingCtrl.create({
//         message: "registroando..."
//       });
//       (await loader).present();
//       try {
//         await this.fireStorte.collection ("datosroot").add(post);
//       } catch (e) {
//         this.showToast(e);
//       }
     
//       (await loader).dismiss(); 
//       this.navCtrl.navigateRoot("/infofraccionamientoPage")     
//     }
//   }
//  formValidation(){

//   if(!this.user.email){
//     this.showToast("Enter email");
//     return false;
//   }

//   if(!this.user.password){
//     this.showToast("Enter password");
//     return false;
//   }
 
//   if (!this.post.nfraccionamiento){
//     this.showToast("Ingrese datos faltantes");
//     return false;
//   }
//   if (!this.post.tipo){
//     this.showToast("Ingrese datos faltantes");
//     return false;
//   }

//   if (!this.post.fecha){
//     this.showToast("Ingrese datos faltantes");
//     return false;
//   }
//   return true;
//  }
//  showToast(message: string){
//    this.toastCtrl.create({
//      message: message,
//      duration: 3100
//    })
//    .then(toastData => toastData.present());
//  }
// }
