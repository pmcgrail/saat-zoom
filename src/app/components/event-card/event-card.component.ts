import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEvent } from 'src/app/models';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {
  @Input() event: IEvent;
}
