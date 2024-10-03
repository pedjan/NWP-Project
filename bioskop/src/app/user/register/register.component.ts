import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user: User;
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

  register(registerForma: NgForm) {
    if (registerForma.valid) {
      this.userService.register(this.user)
      .subscribe((result: any) => { 
        this.initializeUser();
        this.router.navigate(['login']);
      });
    }
  }
}
