import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Button } from 'protractor';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  plus='';
  constructor() { }

  ngOnInit(): void {
  }

  changeText() {
    if (this.plus !== "+") document.getElementById("changeBtn").style.transform = 'rotate(-45deg)';
    if(this.plus === "+") document.getElementById("changeBtn").style.transform = 'rotate(45deg)';
  }
  }

