import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component'
import { AuthInterceptor } from './Interceptors/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    RegisterComponent,
    WeatherComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
