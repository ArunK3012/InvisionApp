import { AuthService } from 'src/app/auth/auth.service';
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

  constructor(private router: Router,
    private authservice: AuthService) { }

  ngOnInit(): void {
  }

  validatePasswordMatch(): void{
    if(this.newPassword !== this.confirmPassword){
      alert('Passwords do not match');
    }
    else {
      alert('Password Reset Successful');
    }
  }
}
