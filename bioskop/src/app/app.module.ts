import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JedanFilmComponent } from './film/jedan-film/jedan-film.component';
import { FilmFormaComponent } from './film/film-forma/film-forma.component';
import { FilmListaComponent } from './film/film-lista/film-lista.component';
import { FilmService } from './services/film.service';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './services/user.service';
import { FilmDetaljiComponent } from './film/film-detalji/film-detalji.component';
import { UserStoreService } from './services/user-store.service';
import { AuthGuard } from './guards/auth.guard';
import { FilmAppInterceptor } from './services/film-app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    JedanFilmComponent,
    FilmFormaComponent,
    FilmListaComponent,
    FilmDetaljiComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    FilmService, 
    UserService,
    AuthGuard,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FilmAppInterceptor,
      multi: true,
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
