import { Component, OnInit, Input } from '@angular/core';

import { IZoomCall } from '../../models';

@Component({
  selector: 'app-zoom-card',
  templateUrl: './zoom-card.component.html',
  styleUrls: ['./zoom-card.component.scss'],
})
export class ZoomCardComponent implements OnInit {
  @Input() call: IZoomCall;

  constructor() {}

  ngOnInit(): void {}
}
