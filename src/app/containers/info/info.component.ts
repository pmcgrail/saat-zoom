import { Component, OnInit } from '@angular/core';

import { IceBreakersService } from '../../providers/ice-breakers.service';
import { SuggestionsService } from 'src/app/providers/suggestions.service';
import { IQuestion } from 'src/app/models';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  question$ = this.iceBreakersService.getRandomQuestion();

  constructor(
    private iceBreakersService: IceBreakersService,
    private suggestionsService: SuggestionsService
  ) {}

  refreshQuestion() {
    this.question$ = this.iceBreakersService.getRandomQuestion();
  }

  async submitQuestion(question: IQuestion) {
    await this.suggestionsService.submitQuestion(question);
  }

  ngOnInit(): void {}
}
