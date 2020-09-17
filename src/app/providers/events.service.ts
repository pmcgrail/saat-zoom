import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEvent } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private firestore: AngularFirestore) {}

  getEvents(): Observable<IEvent[]> {
    return this.firestore
      .collection('events', (ref: CollectionReference) => {
        return ref
          .orderBy('datetime')
          .startAfter(new Date(new Date().getTime()));
      })
      .snapshotChanges()
      .pipe(
        map((calls: DocumentChangeAction<IEvent>[]) => {
          return calls.map((call: DocumentChangeAction<any>) => {
            const data = call.payload.doc.data();
            return {
              datetime: data.datetime.toDate(),
              title: data.title,
              description: data.description,
              link: data.link,
            };
          });
        })
      );
  }
}
