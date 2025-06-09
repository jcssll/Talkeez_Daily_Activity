import { bootstrapApplication } from '@angular/platform-browser';
import { ChildDailyEntryComponent } from '../app/child-daily-entry/child-daily-entry.component';

bootstrapApplication(ChildDailyEntryComponent)
  .catch(err => console.error(err));
