import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  smallScreen: boolean = false;
  ngOnInit() {
    if (window.screen.width < 1000) {
      this.smallScreen = true;
    }
  }
}
