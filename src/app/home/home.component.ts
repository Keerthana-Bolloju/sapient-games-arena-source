import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loader:boolean = true
  public content:boolean = false
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loader = false
      this.content = true
    }, 3000);
  }

}
