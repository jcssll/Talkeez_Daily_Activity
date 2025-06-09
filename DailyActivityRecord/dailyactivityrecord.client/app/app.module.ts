import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildDailyEntryComponent } from './child-daily-entry/child-daily-entry.component'; // ✅ Standalone

@NgModule({
  declarations: [
    AppComponent // ✅ ONLY non-standalone components go here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ChildDailyEntryComponent // ✅ Standalone components go here
  ],
  bootstrap: [ChildDailyEntryComponent]
})
export class AppModule { }
