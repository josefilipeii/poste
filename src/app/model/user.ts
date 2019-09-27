import {Poste} from "./poste";
import {DocumentReference} from "@angular/fire/firestore";

export interface User {
    uid: string;
    email?: string;
    photoURL?: string;
    displayName?: string;
    myCustomData?: string;
    notifications?:string;
}

export interface Notifications {
    referenceDoc: DocumentReference,
    type:NotificationType;
}

export enum NotificationType{
    ACCEPT_POSTE
}