import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const config = {
 apiKey: "AIzaSyBeAHUWhmLOoDSMvgarAOcyXF_USBeHZIw",
  authDomain: "oposte-pweb.firebaseapp.com",
  databaseURL: "https://oposte-pweb.firebaseio.com",
  projectId: "oposte-pweb",
  storageBucket: "oposte-pweb.appspot.com",
  messagingSenderId: "1027413802287",
  appId: "1:1027413802287:web:a580368813b47cf1d435da"
};
@NgModule({
  imports:      [ BrowserModule, FormsModule , 
  AngularFireModule.initializeApp(config),
  AngularFirestoreModule
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
