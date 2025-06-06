import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDailyEntryComponent } from './child-daily-entry.component';

describe('ChildDailyEntryComponent', () => {
  let component: ChildDailyEntryComponent;
  let fixture: ComponentFixture<ChildDailyEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildDailyEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDailyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
