import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public opened = false;

  public triggerCloseMenu(): void {
    this.opened = false;
  }

  public onToggleMenu(): void {
    this.opened = !this.opened;
  }
}
