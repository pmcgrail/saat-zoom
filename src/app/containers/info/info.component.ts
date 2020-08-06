import { Component, OnInit } from '@angular/core';

import { IceBreakersService } from '../../providers/ice-breakers.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  question$ = this.iceBreakersService.getRandomQuestion();

  constructor(private iceBreakersService: IceBreakersService) {}

  ngOnInit(): void {}
}
