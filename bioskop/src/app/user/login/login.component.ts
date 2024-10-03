import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: User;
  public message: string = '';
  public nes: any;
  constructor(private userService: UserService, private router: Router) {
    this.initializeUser();
  }

  initializeUser() {
    this.user = {
      id: -1,
      ime: '',
      korIme: '',
      sifra: ''
    };
  }

  login() {
      this.userService.login(this.user.korIme, this.user.sifra)
      .subscribe((resp: any) => {
        console.log('Successfully logged in');
        this.message = resp.msg;
        this.router.navigate(['film', 'ispis']);
      }, (err: { error: { msg: any; }; }) => {
        console.error('Error logging in', err);
        this.nes = err;
      });
  }

}
