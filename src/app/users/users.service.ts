import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {User} from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private afs: AngularFirestore) {
    }

    list(): AngularFirestoreCollection<User> {
        return this.afs.collection<User>("users");
    }

    get(userId: string): AngularFirestoreDocument<User> {
        return this.afs.doc<User>(`users/${userId}`);
    }


    update(user: User): Promise<void> {
        return this.afs.doc<User>(`users/${user.uid}`).set(user, {merge: true});
    }


}
