import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildDailyEntryComponent } from './child-daily-entry/child-daily-entry.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component'; // ✅ Standalone
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ChildProfileHeaderComponent } from './features/child-profile-header/child-profile-header.component';
//import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
    // You DO NOT declare standalone components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RegisterComponent,
    ChildDailyEntryComponent, // ✅ standalone component goes in `imports`, not `declarations`
    FormsModule,               // ✅ Required for [(ngModel)]
    ReactiveFormsModule,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

