import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IZoomCall } from '../../models';

@Component({
  selector: 'app-zoom-card',
  templateUrl: './zoom-card.component.html',
  styleUrls: ['./zoom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomCardComponent {
  @Input() call: IZoomCall;

  get countdown() {
    const diff = new Date(this.call.datetime).getTime() - new Date().getTime();
    const hours = diff / (1000 * 60 * 60);
    const minutes = diff / (1000 * 60);
    if (diff > 0) {
      return hours > 24
        ? `Call starts in ${Math.round(hours / 24)} day(s)`
        : hours > 1
        ? `Call starts in ${Math.floor(hours)} hour(s)`
        : `Call starts in ${Math.floor(minutes)} minute(s)`;
    }
    return Math.abs(hours) > 1
      ? `Call started ${-Math.floor(hours)} hour(s) ago`
      : `Call started ${-Math.floor(minutes)} minute(s) ago`;
  }
}
