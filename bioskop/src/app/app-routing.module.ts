import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListaComponent } from './film/film-lista/film-lista.component';
import { FilmFormaComponent } from './film/film-forma/film-forma.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FilmDetaljiComponent } from './film/film-detalji/film-detalji.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'film/ispis', component: FilmListaComponent, canActivate: [AuthGuard]},
  { path: 'film/forma', component: FilmFormaComponent, canActivate: [AuthGuard]},
  { path: 'film/:id', component: FilmDetaljiComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
