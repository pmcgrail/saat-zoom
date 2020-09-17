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

  get countdown() {
    const diff = new Date(this.event.datetime).getTime() - new Date().getTime();
    const hours = diff / (1000 * 60 * 60);
    return hours > 24
      ? `In ${Math.floor(hours / 24)} day(s)`
      : `In ${Math.floor(hours)} hour(s)`;
  }
}
