import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { UserEffects } from './state/effects/user.effects';
import { AuthService } from './services/auth.service';
import { authReducer } from './state/reducers/auth.reducer';
import { userReducer } from './state/reducers/user.reducer';
import { attendanceReducer } from './state/reducers/attendance.reducer';
import { FilterPipe } from 'src/app/helpers/filter-pipe';
import { CommonModule } from '@angular/common';
import { subjectReducer } from './state/reducers/subject.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule, 
    StoreModule.forRoot({auth: authReducer, user: userReducer, atte: attendanceReducer, sbjs: subjectReducer}), 
    EffectsModule.forRoot([AuthEffects, UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode()}),
    CommonModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CookieService, //* See ngx-cookie-service dependence
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, //* Inject interceptor (handle headers whit token)
    AuthService,
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
