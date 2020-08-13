import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IQuestion } from 'src/app/models';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() question: IQuestion;

  @Output() refresh = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}
}
