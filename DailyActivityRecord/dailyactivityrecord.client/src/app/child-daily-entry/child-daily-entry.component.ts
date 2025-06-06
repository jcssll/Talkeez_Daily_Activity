import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-child-daily-entry',
  standalone: false,
  templateUrl: './child-daily-entry.component.html',
  styleUrl: './child-daily-entry.component.css'
})
export class ChildDailyEntryComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      date: [new Date()],
      mood: [''],
      behaviors: this.fb.array([]),
      pottyRecords: this.fb.array([]),
      meals: this.fb.array([]),
      schedule: this.fb.array([]),
      notes: [''],
      needs: this.fb.array([])
    });

  }

  //Optionally, create accessors for FormArrays

  get mood(): FormArray {
    return this.form.get('mood') as FormArray;
  }
  get behaviors(): FormArray{
  return this.form.get('behaviors') as FormArray;
  }

  get pottyRecords(): FormArray {
    return this.form.get('meals') as FormArray;
  }

  get meals(): FormArray {
    return this.form.get('meals') as FormArray;
  }
  get schedule(): FormArray {
    return this.form.get('schedule') as FormArray;
  }
  get notes(): FormArray {
    return this.form.get('notes') as FormArray;
  }
  get needs(): FormArray {
    return this.form.get('needs') as FormArray;
  }

}
