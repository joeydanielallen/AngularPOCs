import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';
  name = '';
  public greeting = '';

  greet(): void{
    this.greeting = 'Welcome!';
  }

  constructor() {
const t = "s";

   }

  ngOnInit() {

  }

}
