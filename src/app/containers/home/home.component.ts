import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IZoomCall } from 'src/app/models';
import { CallsService } from '../../providers/calls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  calls$: Observable<IZoomCall[]> = this.service.getCalls();

  constructor(private service: CallsService) {}

  ngOnInit(): void {}
}
