import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { IQuestion } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  constructor(private firestore: AngularFirestore) {}

  submitQuestion(question: IQuestion) {
    const randomId = this.firestore.createId();
    return this.firestore.collection('suggestions').doc(randomId).set(question);
  }
}
