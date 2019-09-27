import {Injectable} from '@angular/core';
import {Poste} from "../model/poste";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PostesService {

    constructor(private afs: AngularFirestore) {
    }

    list(): Observable<Poste[]> {

        return this.afs.collection<Poste>("postes").valueChanges();


    }

    get(posteid: string): Observable<Poste> {
        return this.afs.doc<Poste>(`postes/${posteid}`).valueChanges();
    }


    update(Poste: Poste): Promise<void> {
        return this.afs.doc<Poste>(`Postes/${Poste.uid}`).update(Poste);
    }
}
