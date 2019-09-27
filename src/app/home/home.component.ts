import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users/users.service";
import {ReplaySubject, Subject} from "rxjs";
import {Executor, Poste, ProofType} from "../model/poste";
import {PostesService} from "../postes/postes.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private userService: UsersService, private postesService: PostesService) {
      
    }
    ngOnInit() {
    }


    /**
     let poste: Poste = {
            date: new Date(),
            desc: "primeiro poste",
            proof: "a minha palara basta",
            proofType: ProofType.TESTIMONIAL,
            executors: []
        }
     const subject = new ReplaySubject<Poste>();

     .subscribe(
     value => {
                value.forEach(value1 => poste.executors.push(this.afs.doc(`users/${value1.uid}`).ref));
                subject.next(poste);
            }
     );

     subject.subscribe(value => {
            let userUpdated: User = {
                uid: "b3iHwFoYEtOvrJ4gZZ1sL4IfJZI2",
                postes: [poste]
            };


            this.afs.doc<User>(`users/${userUpdated.uid}`).update(userUpdated);

        });

     */
}
