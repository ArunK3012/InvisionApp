import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Url } from 'url';
import { url } from 'inspector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  title: 'invision-app';

  constructor(public authservice: AuthService, public router: Router) {
    if (this.authservice.loggedin) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit(): void {
    this.login();
  }

  login(): void {
    if (this.username !== '' && this.password !== '') {
      if (this.authservice.login(this.username, this.password)) {
        this.router.navigate(['/home']);
      }
      else {
        this.router.navigate(['/login']);
      }
    }
  }
}
