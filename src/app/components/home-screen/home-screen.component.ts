import { AuthService } from 'src/app/service/auth.service';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'protractor';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  plus = '';
  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  on(): void {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('changeBtn').style.transform = 'rotate(45deg)';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }

  logout(): void {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
