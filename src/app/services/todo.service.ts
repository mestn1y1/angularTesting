import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  private todos: string[] = [];

  // ADD New task to list
  addTask(task: string) {
    this.todos.push(task);
  }

  // GET list all tasks
  getTasks(): string[] {
    return this.todos;
  }

  // DELETE task from list
  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  // CLEAR tasks list
  clearTasks() {
    this.todos = [];
  }
}
