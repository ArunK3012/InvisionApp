import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  user='';
  constructor(public authservice: AuthService, public router: Router) { }

  ngOnInit(): void {
localStorage.setItem('sessionUser',this.user)
  }

  login(): void {
    this.message = 'Logging in..';

    this.authservice.login().then(() => {
      if (this.authservice.isLoggedIn) {
        this.router.navigate([this.authservice.redirectUrl]);
      }
    });

  }
}
