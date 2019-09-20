import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';


  constructor(private db: AngularFirestore) {
    console.log("NABO");
    db.collection("test").add({abc:123, "dummy":"dummy"});
    
  }
}
