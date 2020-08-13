import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

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
        ref.where('__name__', '>', randomId).limit(1)
      )
      .snapshotChanges()
      .pipe(
        map((question: DocumentChangeAction<IQuestion>[]) =>
          question[0].payload.doc.data()
        ),
        retry(1)
      );
  }
}
