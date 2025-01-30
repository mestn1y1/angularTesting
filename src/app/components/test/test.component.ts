import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  title = 'This is interpolation';
  firstName = 'Serhii';
  lastName = 'Tyron';

  isEnabled: boolean = false;
  isActive: boolean = false;
  isDisabled: boolean = true;
  isClickedState: boolean = false;

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
  toggleState() {
    this.isClickedState = !this.isClickedState;
    console.log(this.isClickedState);
  }
}
