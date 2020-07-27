import { Component, OnInit } from '@angular/core';
import { IZoomCall } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  calls: IZoomCall[] = [
    {
      datetime: 1596067200000,
      host: 'Matt Delatour',
    },
    {
      datetime: 1596243600000,
      host: 'Shelly Rottenberg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
