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
}
