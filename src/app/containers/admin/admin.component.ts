import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public auth: AuthService) {}

  showLogin() {
    this.auth.googleSignin();
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {}
}
