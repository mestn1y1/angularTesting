import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { TrancatePipe } from '../../pipes/trancate.pipe';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    TrancatePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  // Custom Validator for age
  ageVAlidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120' };
  }

  // Form
  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]), //Text
    email: new FormControl('', [Validators.required, Validators.email]), // Email
    age: new FormControl(null, [Validators.required, this.ageVAlidator]), // Number
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]), // Text - password
    consent: new FormControl(false, Validators.requiredTrue), // Boolean type
  });

  // Log message on submit
  onSubmit() {
    console.log('Form value', this.complexForm.value);
    console.log('Form status - is valid: ', this.complexForm.valid);
    console.log('Form controls', this.complexForm.controls);
  }

  // Getter for field form
  get name() {
    return this.complexForm.get('name');
  }
  get email() {
    return this.complexForm.get('email');
  }
  get age() {
    return this.complexForm.get('age');
  }
  get password() {
    return this.complexForm.get('password');
  }
  get consent() {
    return this.complexForm.get('consent');
  }

  // newTask: string = '';
  // tasks: string[] = [];

  // constructor(private todoService: TodoService) {}
  // private todoService = inject(TodoService);
  // constructor() {}
  // ngOnInit() {
  //   this.tasks = this.todoService.getTasks();
  // }

  // addTask() {
  //   if (this.newTask.trim() !== '') {
  //     this.todoService.addTask(this.newTask.trim());
  //     this.newTask = ''; // Reset field input
  //     this.updateTasks();
  //   }
  // }

  // removeTask(index: number) {
  //   this.todoService.removeTask(index);
  //   this.updateTasks();
  // }

  // private updateTasks() {
  //   this.tasks = this.todoService.getTasks();
  // }

  // title = 'This is interpolation';
  // firstName = 'Serhii';
  // lastName = 'Tyron';

  // isEnabled: boolean = false;
  // isActive: boolean = false;
  // isDisabled: boolean = true;
  // isClickedState: boolean = false;

  // users = ['Alina', 'Ivan', 'Serhii', 'Veronika'];

  // items: { id: number; name: string }[] = [
  //   { id: 1, name: 'Apple' },
  //   { id: 2, name: 'Bannana' },
  //   { id: 3, name: 'Kivy' },
  //   { id: 4, name: 'Appase' },
  //   { id: 5, name: 'ASAD' },
  // ];

  // appState = 'active';
  // inputText: string = '';

  // today = Date.now();

  // -0-0--0-0-0-0-0-0-00--00--0-0-0-00--00-0--0-0-0-0-0-0-0-0-0-00--0-0

  // @Input() childMessage: string = '';

  // @Output() messageFromChild = new EventEmitter<string>();
  // -0-0--0-0-0-0-0-0-00--00--0-0-0-00--00-0--0-0-0-0-0-0-0-0-0-00--0-0

  // getFullName() {
  //   return `My name is ${this.firstName} ${this.lastName}`;
  // }
  // toggleState() {
  //   this.isClickedState = !this.isClickedState;
  //   console.log(this.isClickedState);
  // }

  // sendMessageToParent() {
  //   this.messageFromChild.emit('I am your child');
  // }
}
