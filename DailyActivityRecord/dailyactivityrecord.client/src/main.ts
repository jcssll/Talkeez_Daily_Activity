import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from '../app/app.module';
import { AppComponent } from '../app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from '../app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent,
  {
    providers: [provideRouter(routes),
      importProvidersFrom(HttpClientModule)
    ]
  });
  //.catch(err => console.error(err));
