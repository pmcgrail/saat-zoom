import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IZoomCall, IEvent } from 'src/app/models';
import { CallsService } from '../../providers/calls.service';
import { EventsService } from '../../providers/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  calls$: Observable<IZoomCall[]> = this.service.getCalls();
  events$: Observable<IEvent[]> = this.events.getEvents();

  constructor(private service: CallsService, private events: EventsService) {}

  ngOnInit(): void {}
}
