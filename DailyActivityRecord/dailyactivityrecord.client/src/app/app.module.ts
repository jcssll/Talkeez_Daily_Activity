import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDailyEntryComponent } from './child-daily-entry/child-daily-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildDailyEntryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ChildDailyEntryComponent] //Make this the root for now
})
export class AppModule { }
