import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  newPassword: string;
  confirmPassword: string;

  constructor(public router: Router,
    private authservice: AuthService) { }

  ngOnInit(): void {
  }

  verifyPasswordMatch(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match');
      this.router.navigate(['password']);
    }
    else {
      alert('Password Reset Successful');
      this.router.navigate(['login']);
    }
  }
}
