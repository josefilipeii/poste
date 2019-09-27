import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './model/user'; // optional

import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {UsersService} from "./users/users.service";

@Injectable({providedIn: 'root'})
export class AuthService {

    user$: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        private userService: UsersService
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                // Logged in
                if (user) {
                    return this.userService.get(user.uid).valueChanges();
                } else {
                    // Logged out
                    return of(null);
                }
            })
        )

    }


    async googleSignin() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        this.updateUserData(credential.user);

    }

    private updateUserData(user) {
        // Sets user data to firestore on login
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            postes: []
        }

        this.userService.update(data)
        return this.userService.update(user).then(() => {
            this.router.navigate(['home']);
        })
    }

    signOut() {
        this.afAuth.auth.signOut()
            .then(value => {
                this.router.navigate(['guest']);
                return value;
            })
    }

}