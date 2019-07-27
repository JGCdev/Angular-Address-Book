import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  addBlockVisible: boolean;

  constructor () {
    this.addBlockVisible = true;
  }

  onChange($event): void {
    this.addBlockVisible = $event;
  }
}
