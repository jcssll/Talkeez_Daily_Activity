import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileHeaderComponent } from './child-profile-header.component';

describe('ChildProfileHeaderComponent', () => {
  let component: ChildProfileHeaderComponent;
  let fixture: ComponentFixture<ChildProfileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildProfileHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
