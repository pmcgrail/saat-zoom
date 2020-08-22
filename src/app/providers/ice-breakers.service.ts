import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';

import { IQuestion } from '../models';

@Injectable({
  providedIn: 'root',
})
export class IceBreakersService {
  constructor(private firestore: AngularFirestore) {}

  getRandomQuestion(): Observable<IQuestion> {
    const randomId = this.firestore.createId();
    return this.firestore
      .collection('ice-breakers', (ref: CollectionReference) =>
        ref.where('__name__', '>=', randomId).orderBy('__name__').limit(1)
      )
      .snapshotChanges()
      .pipe(
        switchMap((question: DocumentChangeAction<IQuestion>[]) => {
          if (question.length) {
            return of(question[0].payload.doc.data());
          }
          return this.getFirstQuestion();
        }),
        retry(1)
      );
  }

  getFirstQuestion(): Observable<IQuestion> {
    return this.firestore
      .collection('ice-breakers', (ref: CollectionReference) =>
        ref
          .where('approved', '==', true)
          .where('__name__', '>=', ' ')
          .orderBy('__name__')
          .limit(1)
      )
      .snapshotChanges()
      .pipe(
        map((question: DocumentChangeAction<IQuestion>[]) =>
          question[0].payload.doc.data()
        )
      );
  }

  submitQuestion(question: IQuestion) {
    const randomId = this.firestore.createId();
    return this.firestore
      .collection('ice-breakers')
      .doc(randomId)
      .set(question);
  }
}
