import {User} from "./user";
import {DocumentReference} from "@angular/fire/firestore";

export enum ProofType {
    IMAGE, TEXT, VIDEO, TESTIMONIAL
}

export interface Poste {
    uid: string;
    date: Date;
    desc: string;
    proof: string;
    proofType: ProofType;
    target: DocumentReference;
    executors: Executor[];

}

export interface Executor {

    reference: DocumentReference;
    accepted?: boolean;
    acceptedDate?: Date;

}