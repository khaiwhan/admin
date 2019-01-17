import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { MaterialModule } from './material';
import { PageModule } from './nebular';
import { ngxModule } from './ngx-bootstrap';
import { ngModule } from './ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    PageModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ngxModule,
    ngModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' }),
  ],
  providers: [{ provide: HttpHandler, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
