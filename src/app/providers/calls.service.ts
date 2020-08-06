import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
  CollectionReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IZoomCall } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CallsService {
  constructor(private firestore: AngularFirestore) {}

  getCalls(): Observable<IZoomCall[]> {
    return this.firestore
      .collection('calls', (ref: CollectionReference) => {
        return ref
          .orderBy('datetime')
          .startAfter(new Date(new Date().getTime() - 1000 * 60 * 60 * 12));
      })
      .snapshotChanges()
      .pipe(
        map((calls: DocumentChangeAction<IZoomCall>[]) => {
          return calls.map((call: DocumentChangeAction<any>) => {
            const data = call.payload.doc.data();
            return {
              datetime: data.datetime.toDate(),
              host: data.host,
            };
          });
        })
      );
  }
}
