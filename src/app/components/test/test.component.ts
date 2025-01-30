import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  inputText: string = '';

  // -0-0--0-0-0-0-0-0-00--00--0-0-0-00--00-0--0-0-0-0-0-0-0-0-0-00--0-0

  @Input() childMessage: string = '';

  @Output() messageFromChild = new EventEmitter<string>();
  // -0-0--0-0-0-0-0-0-00--00--0-0-0-00--00-0--0-0-0-0-0-0-0-0-0-00--0-0

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
  toggleState() {
    this.isClickedState = !this.isClickedState;
    console.log(this.isClickedState);
  }

  sendMessageToParent() {
    this.messageFromChild.emit('I am your child');
  }
}
