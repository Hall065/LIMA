import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './profile/profile.html',
  styleUrls: ['./profile/profile.css']
})
export class App {
  protected readonly title = signal('Hall.');
}