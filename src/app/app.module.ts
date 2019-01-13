import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@nebular/theme';
import { MaterialModule } from './material';
import { PageModule } from './nebular';
import { ngxModule } from './ngx-bootstrap';
import { ngModule } from './ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ngxModule,
    ngModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
