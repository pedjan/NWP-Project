import { Component, OnInit } from '@angular/core';
import { UserStoreService } from './services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bioskop Pedja';
  logovan: boolean;

  constructor(userStore: UserStoreService) {
    this.logovan = userStore.isLoggedIn();
  }

  ngOnInit(): void {
    
  }
}
