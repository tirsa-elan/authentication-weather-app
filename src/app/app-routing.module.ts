import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PanelComponent } from './panel/panel.component';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { AuthdGuard } from './guard/auth.guard';
import { loginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', component: AppComponent , canActivate : [AuthdGuard] },
  { path: 'login', component: LoginComponent , canActivate : [loginGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'userPanel', component: PanelComponent, canActivate : [AuthdGuard] },
  {path : 'weather' , component : WeatherComponent, canActivate : [AuthdGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
