import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from '../services/child.service';
import { DailyEntryService } from '../services/daily-entry.service';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-child-daily-entry',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './child-daily-entry.component.html',
  styleUrls: ['./child-daily-entry.component.css']
})
export class ChildDailyEntryComponent implements OnInit {
  // Dependency Injection using `inject()` for standalone component best practices
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private childService = inject(ChildService);
  private dailyEntryService = inject(DailyEntryService);

  form: FormGroup;
  child: any;

  constructor() {
    this.form = this.fb.group({
      date: [new Date()],
      mood: [''],
      behaviors: this.fb.array([]),
      meals: this.fb.array([]),
      pottyRecords: this.fb.array([]),
      notes: [''],
      needs: this.fb.array([]),
      schedule: this.fb.array([]),
      otherActivity: [''],
      customNeeds: this.fb.array([])
    });
  }

  // ---------- FORM ARRAY GETTERS ----------
  get behaviors(): FormArray { return this.form.get('behaviors') as FormArray; }
  get meals(): FormArray { return this.form.get('meals') as FormArray; }
  get pottyRecords(): FormArray { return this.form.get('pottyRecords') as FormArray; }
  get needs(): FormArray { return this.form.get('needs') as FormArray; }
  get customNeeds(): FormArray { return this.form.get('customNeeds') as FormArray; }
  get schedule(): FormArray { return this.form.get('schedule') as FormArray; }

  // ---------- ON INIT ----------
  ngOnInit(): void {
    const childId = this.route.snapshot.paramMap.get('childId');
    if (childId) {
      this.childService.getChildProfile(+childId).subscribe({
        next: (data) => this.child = data,
        error: (err) => console.error('Failed to load child:', err)
      });
    }
  }

  // ---------- BEHAVIOR HANDLER ----------
  toggleBehavior(type: string, event: any) {
    if (event.target.checked) {
      this.behaviors.push(this.fb.group({ type, reason: [''] }));
    } else {
      const index = this.behaviors.controls.findIndex(c => c.value.type === type);
      if (index !== -1) this.behaviors.removeAt(index);
    }
  }

  // ---------- MEAL HANDLER ----------
  addMeal(type: string) {
    this.meals.push(this.fb.group({ type: [type], time: [''], amount: [''] }));
  }

  // ---------- POTTY HANDLER ----------
  addPottyRecord() {
    this.pottyRecords.push(this.fb.group({
      time: [''],
      status: this.fb.array([])
    }));
  }

  togglePottyOption(index: number, value: string, event: any) {
    const recordGroup = this.pottyRecords.at(index) as FormGroup;
    const statuses = recordGroup.get('status') as FormArray;

    if (event.target.checked) {
      statuses.push(this.fb.control(value));
    } else {
      const idx = statuses.controls.findIndex(c => c.value === value);
      if (idx !== -1) statuses.removeAt(idx);
    }
  }

  // ---------- SCHEDULE HANDLER ----------
  toggleSchedule(item: string, event: any) {
    const array = this.schedule;

    if (event.target.checked) {
      array.push(this.fb.control(item));
    } else {
      const index = array.controls.findIndex(c => c.value === item);
      if (index !== -1) array.removeAt(index);
      if (item === 'Other') this.form.patchValue({ otherActivity: '' });
    }
  }

  scheduleIncludes(item: string): boolean {
    return this.schedule.value.includes(item);
  }

  getActivitySummary(): string[] {
    const activities = this.schedule.value;
    const other = this.form.get('otherActivity')?.value;
    if (other && activities.includes('Other')) {
      return activities.map((a: string) => (a === 'Other' ? `Other: ${other}` : a));
    }
    return activities;
  }

  // ---------- NEEDS HANDLER ----------
  toggleNeed(label: string, event: any) {
    if (event.target.checked) {
      this.needs.push(this.fb.control(label));
    } else {
      const index = this.needs.controls.findIndex(c => c.value === label);
      if (index !== -1) this.needs.removeAt(index);
    }
  }

  // ---------- CUSTOM NEEDS HANDLER ----------
  addCustomNeed() {
    this.customNeeds.push(this.fb.group({ label: [''], active: [false] }));
  }

  removeCustomNeed(index: number) {
    this.customNeeds.removeAt(index);
  }

  // ---------- SUBMIT HANDLER ----------
  onSubmit() {
    if (!this.child) return;

    const entry = {
      childId: this.child.id,
      date: this.form.value.date,
      mood: this.form.value.mood,
      behaviors: this.form.value.behaviors,
      meals: this.form.value.meals,
      pottyRecords: this.form.value.pottyRecords,
      notes: this.form.value.notes,
      needs: this.form.value.needs,
      schedule: this.getActivitySummary(),
      customNeeds: this.form.value.customNeeds,
      submittedByUserId: 0 // optional: populate from auth later
    };

    this.dailyEntryService.submitDailyEntry(entry).subscribe({
      next: () => console.log('Daily entry submitted successfully.'),
      error: (err) => console.error('Failed to submit entry:', err)
    });
  }
}
