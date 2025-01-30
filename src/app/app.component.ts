import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet, TestComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-test-2';
  messageFromParent = 'I am your father';
  messageFromChild = '';
  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
