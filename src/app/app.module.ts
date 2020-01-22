import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material.module';
import {MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
  ],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatListModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
