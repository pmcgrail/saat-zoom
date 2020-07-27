import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
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
      .collection('calls')
      .snapshotChanges()
      .pipe(
        map((calls: DocumentChangeAction<any>[]) => {
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
