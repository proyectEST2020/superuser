import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth,
              private firestore: AngularFirestore
              ) { }

  login(email: string, password: string){

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));   

    });
  }
  register(email: string, 
           password: string, 
           users: string, 
           nfraccionamiento: string, 
           tipo: string,
           fechacreacion: string,
           cuota: string,
           image: string){
    return new Promise ((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res =>{
        console.log(email);
        const uid = res.user.uid;
        this.firestore.collection('users').doc(res.user.uid).set({
          users: users,
          uid: uid,
          tipo: tipo, 
          fechacreacion: fechacreacion,
          nfraccionamiento: nfraccionamiento,
          cuota: cuota,
          image: image
        })
        resolve(res)
      }).catch( err => reject(err))
    })

  }
    

}
