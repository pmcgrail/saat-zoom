import { Component, OnInit } from '@angular/core';
import { IZoomCall } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nextCall: IZoomCall = {
    datetime: 1596067200000,
    host: 'Matt Delatour',
  };

  constructor() {}

  ngOnInit(): void {}
}
