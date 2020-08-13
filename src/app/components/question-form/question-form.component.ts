import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IQuestion } from 'src/app/models';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<IQuestion>();

  form = this.fb.group({
    text: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(50)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  submitQuestion() {
    if (!this.form.valid) {
      return;
    }
    this.submitted.emit(this.form.value);
    this.form.reset();
  }

  ngOnInit(): void {}
}
